<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { setupScene } from '../setupScene';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const { renderer, scene, camera, mouse, cleanup } = setupScene(canvas);

    const hexRadius = 0.45;
    const spacing = 1.05;
    const cols = 14;
    const rows = 10;
    const hexShape = new THREE.Shape();
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * hexRadius;
      const y = Math.sin(angle) * hexRadius;
      if (i === 0) hexShape.moveTo(x, y);
      else hexShape.lineTo(x, y);
    }
    hexShape.closePath();

    const tiles: { mesh: THREE.Mesh; baseY: number; phase: number; speed: number }[] = [];
    const colorA = new THREE.Color('#5299e0');
    const colorB = new THREE.Color('#312e81');

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacing + (r % 2 === 0 ? 0 : spacing * 0.5);
        const z = r * spacing * 0.85;
        const geometry = new THREE.ShapeGeometry(hexShape);
        const t = Math.random();
        const cColor = colorA.clone().lerp(colorB, t);
        const material = new THREE.MeshBasicMaterial({
          color: cColor,
          transparent: true,
          opacity: 0.25 + Math.random() * 0.2,
          wireframe: false,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x - (cols * spacing) / 2, 0, z - (rows * spacing * 0.85) / 2);
        mesh.rotation.x = -Math.PI / 2;
        scene.add(mesh);
        tiles.push({
          mesh,
          baseY: 0,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.4,
        });
      }
    }

    camera.position.set(0, 7, 6);
    camera.lookAt(0, 0, 0);

    let animId: number;
    const animate = (time: number) => {
      const t = time * 0.001;
      for (const tile of tiles) {
        const y = Math.sin(t * tile.speed + tile.phase) * 0.15;
        const rx = (tile.mesh.position.x + mouse.x * 1.5) * 0.1;
        const rz = (tile.mesh.position.z + mouse.y * 1.5) * 0.1;
        tile.mesh.position.y = y + rx * rx * 0.02 + rz * rz * 0.02;
      }

      camera.position.x = mouse.x * 0.5;
      camera.position.z = 6 + mouse.y * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      cleanup();
    };
  });
</script>

<canvas bind:this={canvas} class="absolute inset-0 w-full h-full"></canvas>
