<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { setupScene } from '../setupScene';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const { renderer, scene, camera, mouse, cleanup } = setupScene(canvas);

    const geometry = new THREE.IcosahedronGeometry(2, 4);
    const material = new THREE.MeshStandardMaterial({
      color: '#5299e0',
      emissive: '#2563eb',
      emissiveIntensity: 0.3,
      metalness: 0.3,
      roughness: 0.4,
      flatShading: false,
      transparent: true,
      opacity: 0.85,
    });

    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);

    camera.position.z = 6;

    const ambientLight = new THREE.AmbientLight(0x404060, 0.5);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0x5299e0, 2);
    light.position.set(5, 5, 5);
    scene.add(light);

    const light2 = new THREE.DirectionalLight(0x8b5cf6, 1.5);
    light2.position.set(-5, -3, -5);
    scene.add(light2);

    const pos = geometry.attributes.position;
    const original = new Float32Array(pos.array as Float32Array);

    let animId: number;
    const animate = (time: number) => {
      const t = time * 0.001;
      const arr = pos.array as Float32Array;
      for (let i = 0; i < arr.length; i += 3) {
        const ox = original[i];
        const oy = original[i + 1];
        const oz = original[i + 2];
        const d = Math.sqrt(ox * ox + oy * oy + oz * oz);
        const noise =
          Math.sin(ox * 2 + t * 0.8) * 0.15 +
          Math.sin(oy * 1.5 + t * 1.1) * 0.12 +
          Math.sin(oz * 1.8 + t * 0.6) * 0.1 +
          Math.sin((ox + oy + oz) * 1.2 + t * 0.9) * 0.08;
        const scale = 1 + noise;
        arr[i] = ox * scale;
        arr[i + 1] = oy * scale;
        arr[i + 2] = oz * scale;
      }
      pos.needsUpdate = true;
      geometry.computeVertexNormals();

      blob.rotation.x = Math.sin(t * 0.2) * 0.2 + mouse.y * 0.3;
      blob.rotation.y = t * 0.15 + mouse.x * 0.3;

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
