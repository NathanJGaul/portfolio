<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { setupScene } from '../setupScene';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const { renderer, scene, camera, mouse, cleanup } = setupScene(canvas, { far: 50 });

    const count = 15000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const innerColor = new THREE.Color('#ffffff');
    const midColor = new THREE.Color('#5299e0');
    const outerColor = new THREE.Color('#6b21a8');

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 8;
      const armAngle = radius * 2.5;
      const spread = (1 - radius / 8) * 0.6 + 0.1;
      const angle = armAngle + (Math.random() - 0.5) * spread;
      const height = (Math.random() - 0.5) * 0.5 * (1 - radius / 8);

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      const t = radius / 8;
      let c: THREE.Color;
      if (t < 0.3) {
        c = innerColor.clone().lerp(midColor, t / 0.3);
      } else {
        c = midColor.clone().lerp(outerColor, (t - 0.3) / 0.7);
      }
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const galaxy = new THREE.Points(geometry, material);
    scene.add(galaxy);

    camera.position.z = 12;

    let animId: number;
    const animate = (time: number) => {
      const t = time * 0.0001;
      galaxy.rotation.y = t + mouse.x * 0.1;
      galaxy.rotation.x = Math.sin(t * 0.3) * 0.05 + mouse.y * 0.05;
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
