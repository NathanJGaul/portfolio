<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { setupScene } from '../setupScene';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const { renderer, scene, camera, mouse, cleanup } = setupScene(canvas);

    const rings: { mesh: THREE.Mesh; speed: number; tiltX: number; tiltZ: number }[] = [];
    const count = 7;

    for (let i = 0; i < count; i++) {
      const radius = 1.5 + i * 0.6;
      const geometry = new THREE.TorusGeometry(radius, 0.02, 16, 64);
      const hue = 0.58 + i * 0.02;
      const color = new THREE.Color().setHSL(hue, 0.8, 0.5 + i * 0.04);
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5 - i * 0.04,
        wireframe: true,
      });

      const mesh = new THREE.Mesh(geometry, material);
      const tiltX = (Math.random() - 0.5) * Math.PI * 0.6;
      const tiltZ = (Math.random() - 0.5) * Math.PI * 0.6;
      mesh.rotation.x = tiltX;
      mesh.rotation.z = tiltZ;
      scene.add(mesh);

      rings.push({ mesh, speed: 0.2 + Math.random() * 0.3, tiltX, tiltZ });
    }

    camera.position.z = 6;

    let animId: number;
    const animate = (time: number) => {
      const t = time * 0.001;
      const group = new THREE.Group();

      for (const ring of rings) {
        ring.mesh.rotation.x = ring.tiltX + Math.sin(t * ring.speed) * 0.1;
        ring.mesh.rotation.z = ring.tiltZ + Math.cos(t * ring.speed * 0.7) * 0.1;
        ring.mesh.rotation.y += 0.005 * ring.speed;
      }

      const groupObj = new THREE.Object3D();
      groupObj.rotation.x = mouse.y * 0.2;
      groupObj.rotation.y = mouse.x * 0.2;

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
