<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { setupScene } from '../setupScene';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const { renderer, scene, camera, mouse, cleanup } = setupScene(canvas, { far: 60 });

    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const phases = new Float32Array(count);

    const colorA = new THREE.Color('#5299e0');
    const colorB = new THREE.Color('#a855f7');

    for (let i = 0; i < count; i++) {
      const radius = 0.5 + Math.random() * 4;
      const angle = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 30;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = z;

      const t = radius / 4.5;
      const c = colorA.clone().lerp(colorB, t);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      speeds[i] = 0.5 + Math.random() * 0.5;
      phases[i] = Math.random() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 0;

    let animId: number;
    const animate = (time: number) => {
      const t = time * 0.001;
      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const z = pos[i3 + 2] + speeds[i] * 0.08;
        pos[i3 + 2] = z > 15 ? -15 : z;

        const progress = (pos[i3 + 2] + 15) / 30;
        const angle = progress * Math.PI * 4 + phases[i] + t * 0.3;
        const radius = 0.5 + progress * 4;
        pos[i3] = Math.cos(angle) * radius;
        pos[i3 + 1] = Math.sin(angle) * radius;
      }

      geometry.attributes.position.needsUpdate = true;

      particles.rotation.x = mouse.y * 0.05;
      particles.rotation.y = mouse.x * 0.05;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      geometry.dispose();
      material.dispose();
      cleanup();
    };
  });
</script>

<canvas bind:this={canvas} class="absolute inset-0 w-full h-full"></canvas>
