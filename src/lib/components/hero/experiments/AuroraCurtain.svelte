<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { setupScene } from '../setupScene';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const { renderer, scene, camera, mouse, cleanup } = setupScene(canvas);

    const widthSeg = 200;
    const heightSeg = 12;
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const indices: number[] = [];
    const colors: number[] = [];

    const w = 14;
    const h = 6;

    for (let i = 0; i <= heightSeg; i++) {
      for (let j = 0; j <= widthSeg; j++) {
        const x = (j / widthSeg - 0.5) * w;
        const y = (i / heightSeg - 0.5) * h;
        vertices.push(x, y, 0);
      }
    }

    for (let i = 0; i < heightSeg; i++) {
      for (let j = 0; j < widthSeg; j++) {
        const a = i * (widthSeg + 1) + j;
        const b = i * (widthSeg + 1) + j + 1;
        const c = (i + 1) * (widthSeg + 1) + j;
        const d = (i + 1) * (widthSeg + 1) + j + 1;
        indices.push(a, b, c);
        indices.push(b, d, c);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    const material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
      color: '#5299e0',
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.4;
    mesh.position.y = -1;
    scene.add(mesh);

    const pos = geometry.attributes.position;

    camera.position.set(0, 1, 8);
    camera.lookAt(0, 0, 0);

    let animId: number;
    const animate = (time: number) => {
      const t = time * 0.001;
      const arr = pos.array as Float32Array;

      for (let i = 0; i <= heightSeg; i++) {
        for (let j = 0; j <= widthSeg; j++) {
          const idx = (i * (widthSeg + 1) + j) * 3;
          const x = (j / widthSeg - 0.5) * w;
          const y = (i / heightSeg - 0.5) * h;

          const wave1 = Math.sin(x * 0.5 + t * 0.6) * 0.4;
          const wave2 = Math.sin(x * 0.3 + t * 0.4 + y * 0.5) * 0.3;
          const wave3 = Math.sin(x * 0.8 + t * 1.1) * 0.2 * Math.sin(y * 0.3 + t * 0.2);
          arr[idx + 2] = wave1 + wave2 + wave3;
        }
      }

      pos.needsUpdate = true;
      geometry.computeVertexNormals();

      mesh.position.x = mouse.x * 0.5;
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
