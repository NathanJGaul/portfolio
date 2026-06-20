<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { setupScene } from '../setupScene';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const { renderer, scene, camera, mouse, cleanup } = setupScene(canvas);

    const seg = 80;
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const indices: number[] = [];
    const colors: number[] = [];
    const uv: number[] = [];

    const size = 12;
    const colorA = new THREE.Color('#1e3a5f');
    const colorB = new THREE.Color('#5299e0');

    for (let i = 0; i <= seg; i++) {
      for (let j = 0; j <= seg; j++) {
        const x = (i / seg - 0.5) * size;
        const z = (j / seg - 0.5) * size;
        vertices.push(x, 0, z);
        uv.push(i / seg, j / seg);
      }
    }

    for (let i = 0; i < seg; i++) {
      for (let j = 0; j < seg; j++) {
        const a = i * (seg + 1) + j;
        const b = i * (seg + 1) + j + 1;
        const c = (i + 1) * (seg + 1) + j;
        const d = (i + 1) * (seg + 1) + j + 1;
        indices.push(a, b, c);
        indices.push(b, d, c);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: '#5299e0',
      emissive: '#1d4ed8',
      emissiveIntensity: 0.2,
      metalness: 0.3,
      roughness: 0.6,
      transparent: true,
      opacity: 0.5,
      wireframe: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2.5;
    mesh.position.y = -1.5;
    scene.add(mesh);

    const ambientLight = new THREE.AmbientLight(0x404060, 0.3);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0x5299e0, 1);
    light.position.set(5, 10, 5);
    scene.add(light);

    camera.position.set(0, 3, 7);
    camera.lookAt(0, 0, 0);

    const pos = geometry.attributes.position;

    let animId: number;
    const animate = (time: number) => {
      const t = time * 0.001;
      const arr = pos.array as Float32Array;

      for (let i = 0; i <= seg; i++) {
        for (let j = 0; j <= seg; j++) {
          const idx = (i * (seg + 1) + j) * 3;
          const x = (i / seg - 0.5) * size;
          const z = (j / seg - 0.5) * size;
          const dist = Math.sqrt(x * x + z * z);
          const ripple = Math.sin(dist * 3 - t * 2) * 0.08 +
                         Math.sin(dist * 5 - t * 3.5) * 0.04 +
                         Math.sin(dist * 7 - t * 5) * 0.02;
          arr[idx + 1] = ripple * Math.max(0, 1 - dist / 8);
        }
      }

      pos.needsUpdate = true;
      geometry.computeVertexNormals();

      mesh.rotation.z = mouse.x * 0.05;

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
