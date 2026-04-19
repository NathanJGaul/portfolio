<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import type { BackdropProps } from '$lib/types/backdrop';

	let {
		opacity = 0.55,
		color = null,
		interactive = true,
		layers = 4,
		speed = 0.4,
		showGrid = true
	}: BackdropProps & {
		layers?: number;
		speed?: number;
		showGrid?: boolean;
	} = $props();

	let canvas: HTMLCanvasElement;

	const resolveColor = (cssColor: string): string => {
		const el = document.createElement('span');
		el.style.cssText = `color:${cssColor};position:absolute;pointer-events:none;visibility:hidden;`;
		document.body.appendChild(el);
		const c = getComputedStyle(el).color;
		document.body.removeChild(el);
		return c;
	};

	onMount(() => {
		if (!browser) return;

		const ctx = canvas.getContext('2d')!;
		let w = 0,
			h = 0;
		let animId: number;
		let drawColor = '';
		let mouse = { x: -1, y: -1 };

		interface Layer {
			points: { x: number; y: number }[];
			patternW: number;
			baseOffset: number;
			driftSpeed: number;
			fillAlpha: number;
			strokeAlpha: number;
			parallaxStrength: number;
		}

		let layerData: Layer[] = [];

		const refreshColor = () => {
			drawColor = resolveColor(color ?? 'oklch(var(--p))');
		};

		const genLayer = (i: number, n: number): Layer => {
			const t = n > 1 ? i / (n - 1) : 0; // 0 = furthest back, 1 = closest front

			// Park-Miller LCG seeded per layer
			let s = (i + 1) * 1_234_567;
			const rand = () => {
				s = Math.imul(s, 1_664_525) + 1_013_904_223;
				return (s >>> 0) / 0x1_0000_0000;
			};

			// Back layers: tall/jagged peaks. Front: short/broad.
			const peakMax = h * (0.72 - t * 0.42);
			const peakMin = peakMax * 0.22;

			// More segments (smaller peaks) for distant layers, fewer (bigger) for near
			const segPerView = Math.round(8 - t * 5); // 8 back → 3 front
			const patternW = w * 5; // 5 canvas-widths for long seamless loop
			const segCount = segPerView * 5;
			const segW = patternW / segCount;

			// Heights biased toward taller peaks via sqrt distribution
			const heights = Array.from({ length: segCount }, () => {
				const r = rand();
				return peakMin + Math.sqrt(r) * (peakMax - peakMin);
			});
			// Seamless tile: close the loop with the same height as the first peak
			heights.push(heights[0]);

			const points = heights.map((hh, idx) => ({ x: idx * segW, y: h - hh }));

			return {
				points,
				patternW,
				baseOffset: 0,
				driftSpeed: speed * (0.2 + t * 0.6),
				fillAlpha: 0.08 + t * 0.14, // 0.08 (back) → 0.22 (front)
				strokeAlpha: 0.1 + t * 0.18, // 0.10 (back) → 0.28 (front)
				parallaxStrength: t * 35
			};
		};

		const buildLayers = () => {
			const n = Math.max(2, Math.min(layers, 6));
			layerData = Array.from({ length: n }, (_, i) => genLayer(i, n));
		};

		const resize = () => {
			w = canvas.offsetWidth;
			h = canvas.offsetHeight;
			canvas.width = w;
			canvas.height = h;
			buildLayers();
		};

		const drawGrid = () => {
			if (!showGrid) return;
			const sz = 70;
			ctx.strokeStyle = drawColor;
			ctx.lineWidth = 0.5;
			ctx.globalAlpha = 0.07;
			ctx.beginPath();
			for (let x = 0; x <= w; x += sz) {
				ctx.moveTo(x, 0);
				ctx.lineTo(x, h);
			}
			for (let y = 0; y <= h; y += sz) {
				ctx.moveTo(0, y);
				ctx.lineTo(w, y);
			}
			ctx.stroke();
		};

		const drawLayer = (layer: Layer) => {
			if (layer.points.length < 2) return;

			const mx = interactive && mouse.x >= 0 ? mouse.x / w - 0.5 : 0;
			const ofs =
				((layer.baseOffset + mx * layer.parallaxStrength) % layer.patternW + layer.patternW) %
				layer.patternW;

			// Collect visible points from enough tiled copies to cover canvas + buffer
			const copies = Math.ceil(w / layer.patternW) + 2;
			const visible: { x: number; y: number }[] = [];
			for (let c = -1; c <= copies; c++) {
				for (const pt of layer.points) {
					const px = pt.x + c * layer.patternW - ofs;
					if (px >= -120 && px <= w + 120) {
						visible.push({ x: px, y: pt.y });
					}
				}
			}
			if (visible.length < 2) return;
			visible.sort((a, b) => a.x - b.x);

			// Filled silhouette polygon
			ctx.beginPath();
			ctx.moveTo(visible[0].x, h);
			for (const pt of visible) ctx.lineTo(pt.x, pt.y);
			ctx.lineTo(visible[visible.length - 1].x, h);
			ctx.closePath();
			ctx.fillStyle = drawColor;
			ctx.globalAlpha = layer.fillAlpha;
			ctx.fill();

			// Ridgeline — glow pass then sharp pass
			ctx.beginPath();
			ctx.moveTo(visible[0].x, visible[0].y);
			for (let i = 1; i < visible.length; i++) ctx.lineTo(visible[i].x, visible[i].y);
			ctx.strokeStyle = drawColor;
			ctx.lineWidth = 4;
			ctx.globalAlpha = layer.strokeAlpha * 0.2;
			ctx.stroke();
			ctx.lineWidth = 1;
			ctx.globalAlpha = layer.strokeAlpha;
			ctx.stroke();
		};

		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			drawGrid();
			for (const layer of layerData) drawLayer(layer);
			ctx.globalAlpha = 1;
		};

		let lastTime = 0;
		const animate = (ts: number) => {
			const dt = lastTime === 0 ? 0 : Math.min((ts - lastTime) / 1000, 0.05);
			lastTime = ts;
			for (const layer of layerData) layer.baseOffset += layer.driftSpeed * 60 * dt;
			draw();
			animId = requestAnimationFrame(animate);
		};

		const onMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
		};
		const onMouseLeave = () => {
			mouse = { x: -1, y: -1 };
		};

		// Re-resolve color when the DaisyUI theme attribute changes
		const themeObserver = new MutationObserver(refreshColor);
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		refreshColor();
		resize();
		window.addEventListener('resize', resize);
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseleave', onMouseLeave);
		animId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animId);
			themeObserver.disconnect();
			window.removeEventListener('resize', resize);
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
