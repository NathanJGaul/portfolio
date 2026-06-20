<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { setupScene } from '../setupScene';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const { renderer, scene, camera, mouse, cleanup } = setupScene(canvas, { far: 30 });

    const count = 150;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      sizes[i] = 2 + Math.random() * 4;
    }

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const pointMat = new THREE.PointsMaterial({
      color: '#5299e0',
      size: 0.06,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(pointGeo, pointMat);
    scene.add(points);

    const linePairs: { a: number; b: number; dist: number }[] = [];
    const maxDist = 2.5;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < maxDist) {
          linePairs.push({ a: i, b: j, dist: d });
        }
      }
    }

    const linePositions = new Float32Array(linePairs.length * 6);
    const lineColors = new Float32Array(linePairs.length * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    camera.position.z = 10;

    function updateLines(pulse: number) {
      const lp = lineGeo.attributes.position.array as Float32Array;
      const lc = lineGeo.attributes.color.array as Float32Array;
      const color = new THREE.Color('#5299e0');

      for (let k = 0; k < linePairs.length; k++) {
        const { a, b } = linePairs[k];
        const i6 = k * 6;
        lp[i6] = positions[a * 3];
        lp[i6 + 1] = positions[a * 3 + 1];
        lp[i6 + 2] = positions[a * 3 + 2];
        lp[i6 + 3] = positions[b * 3];
        lp[i6 + 4] = positions[b * 3 + 1];
        lp[i6 + 5] = positions[b * 3 + 2];

        const alpha = (1 - linePairs[k].dist / maxDist) * pulse;
        const c = color.clone().multiplyScalar(alpha);
        lc[i6] = c.r;
        lc[i6 + 1] = c.g;
        lc[i6 + 2] = c.b;
        lc[i6 + 3] = c.r;
        lc[i6 + 4] = c.g;
        lc[i6 + 5] = c.b;
      }

      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;
    }

    let animId: number;
    const animate = (time: number) => {
      const t = time * 0.001;
      const pulse = 0.5 + Math.sin(t * 0.5) * 0.5;

      updateLines(pulse);

      pointMat.opacity = 0.6 + pulse * 0.4;

      points.rotation.x = Math.sin(t * 0.05) * 0.1 + mouse.y * 0.2;
      points.rotation.y = t * 0.03 + mouse.x * 0.2;

      lineMat.opacity = 0.15 + pulse * 0.25;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      pointGeo.dispose();
      pointMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      cleanup();
    };
  });
</script>

<canvas bind:this={canvas} class="absolute inset-0 w-full h-full"></canvas>
