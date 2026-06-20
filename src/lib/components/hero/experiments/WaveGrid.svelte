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

    const colorA = new THREE.Color('#5299e0');
    const colorB = new THREE.Color('#6b21a8');

    for (let i = 0; i <= seg; i++) {
      for (let j = 0; j <= seg; j++) {
        const x = (i / seg - 0.5) * 10;
        const z = (j / seg - 0.5) * 10;
        vertices.push(x, 0, z);
        uv.push(i / seg, j / seg);
        colors.push(colorA.r, colorA.g, colorA.b);
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
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    const material = new THREE.MeshBasicMaterial({
      vertexColors: true,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const positions = geometry.attributes.position;
    const colorAttr = geometry.attributes.color;

    camera.position.set(0, 6, 8);
    camera.lookAt(0, 0, 0);

    let animId: number;
    const animate = (time: number) => {
      const t = time * 0.001;
      const pos = positions.array as Float32Array;
      const col = colorAttr.array as Float32Array;

      for (let i = 0; i <= seg; i++) {
        for (let j = 0; j <= seg; j++) {
          const idx = (i * (seg + 1) + j) * 3;
          const x = (i / seg - 0.5) * 10;
          const z = (j / seg - 0.5) * 10;
          const dist = Math.sqrt(x * x + z * z);
          pos[idx + 1] = Math.sin(dist * 1.5 - t * 1.2) * 0.5 +
                         Math.sin(x * 0.8 + t * 0.7) * 0.3 +
                         Math.sin(z * 0.6 + t * 0.9) * 0.2;

          const heightNorm = (pos[idx + 1] + 1) / 2;
          const c = colorA.clone().lerp(colorB, heightNorm);
          col[idx] = c.r;
          col[idx + 1] = c.g;
          col[idx + 2] = c.b;
        }
      }

      positions.needsUpdate = true;
      colorAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      mesh.rotation.y = mouse.x * 0.1;
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
