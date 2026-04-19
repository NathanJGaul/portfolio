<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	interface Particle {
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
	}

	let {
		particleCount = 60,
		speed = 0.5,
		connectionDistance = 140,
		particleSize = 2,
		opacity = 0.5,
		interactive = true,
		color = null
	}: {
		particleCount?: number;
		speed?: number;
		connectionDistance?: number;
		particleSize?: number;
		opacity?: number;
		interactive?: boolean;
		/** CSS color string (e.g. "#fff", "oklch(70% 0.2 250)"). Defaults to theme primary. */
		color?: string | null;
	} = $props();

	let canvas: HTMLCanvasElement;

	/** Resolves a CSS color string (including CSS variables) to an rgb() value canvas can use. */
	const resolveColor = (cssColor: string): string => {
		const probe = document.createElement('span');
		probe.style.cssText = `color: ${cssColor}; position: absolute; pointer-events: none; visibility: hidden;`;
		document.body.appendChild(probe);
		const resolved = getComputedStyle(probe).color;
		document.body.removeChild(probe);
		return resolved;
	};

	onMount(() => {
		if (!browser) return;

		const ctx = canvas.getContext('2d')!;
		let particles: Particle[] = [];
		let mouse = { x: -9999, y: -9999 };
		let w = 0,
			h = 0;
		let animId: number;
		let drawColor = '';

		const refreshColor = () => {
			drawColor = resolveColor(color ?? 'oklch(var(--p))');
		};

		const resize = () => {
			w = canvas.offsetWidth;
			h = canvas.offsetHeight;
			canvas.width = w;
			canvas.height = h;
		};

		const makeParticles = () => {
			const count = Math.min(Math.max(particleCount, 1), 150);
			particles = Array.from({ length: count }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - 0.5) * speed * 2,
				vy: (Math.random() - 0.5) * speed * 2,
				size: Math.random() * Math.max(particleSize - 0.5, 0.1) + 0.5
			}));
		};

		const draw = () => {
			ctx.clearRect(0, 0, w, h);

			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < connectionDistance) {
						ctx.beginPath();
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.strokeStyle = drawColor;
						ctx.globalAlpha = (1 - dist / connectionDistance) * 0.35;
						ctx.lineWidth = 0.5;
						ctx.stroke();
					}
				}
			}

			ctx.globalAlpha = 0.75;
			ctx.fillStyle = drawColor;
			for (const p of particles) {
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fill();
			}

			ctx.globalAlpha = 1;
		};

		const update = () => {
			const maxSpeed = speed * 3;
			const minSpeed = speed * 0.25;

			for (const p of particles) {
				if (interactive) {
					const dx = p.x - mouse.x;
					const dy = p.y - mouse.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < 100 && dist > 0) {
						const force = ((100 - dist) / 100) * 0.04;
						p.vx += (dx / dist) * force;
						p.vy += (dy / dist) * force;
					}
				}

				p.vx *= 0.98;
				p.vy *= 0.98;

				const s = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
				if (s > 0) {
					if (s < minSpeed) {
						p.vx = (p.vx / s) * minSpeed;
						p.vy = (p.vy / s) * minSpeed;
					} else if (s > maxSpeed) {
						p.vx = (p.vx / s) * maxSpeed;
						p.vy = (p.vy / s) * maxSpeed;
					}
				}

				p.x += p.vx;
				p.y += p.vy;

				if (p.x < 0) p.x = w;
				else if (p.x > w) p.x = 0;
				if (p.y < 0) p.y = h;
				else if (p.y > h) p.y = 0;
			}
		};

		const animate = () => {
			update();
			draw();
			animId = requestAnimationFrame(animate);
		};

		const onMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		};

		const onMouseLeave = () => {
			mouse.x = -9999;
			mouse.y = -9999;
		};

		// Re-resolve color when the DaisyUI theme attribute changes
		const themeObserver = new MutationObserver(refreshColor);
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		const handleResize = () => {
			resize();
			makeParticles();
		};

		refreshColor();
		resize();
		makeParticles();
		animate();

		window.addEventListener('resize', handleResize);
		// Track mouse on window so pointer-events-none on canvas doesn't block interaction
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseleave', onMouseLeave);

		return () => {
			cancelAnimationFrame(animId);
			themeObserver.disconnect();
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseleave', onMouseLeave);
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="absolute inset-0 w-full h-full pointer-events-none"
	style="opacity: {opacity};"
></canvas>
