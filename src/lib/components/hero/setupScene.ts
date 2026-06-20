import * as THREE from 'three';

export interface SceneSetup {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  mouse: { x: number; y: number };
  cleanup: () => void;
  resize: () => void;
}

export function setupScene(
  canvas: HTMLCanvasElement,
  opts?: { fov?: number; near?: number; far?: number; pixelRatio?: number }
): SceneSetup {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(devicePixelRatio, opts?.pixelRatio ?? 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    opts?.fov ?? 75,
    canvas.clientWidth / canvas.clientHeight,
    opts?.near ?? 0.1,
    opts?.far ?? 1000
  );

  const mouse = { x: 0, y: 0 };

  const handleMouse = (e: MouseEvent) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener('mousemove', handleMouse);

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const cleanup = () => {
    window.removeEventListener('mousemove', handleMouse);
    ro.disconnect();
    renderer.dispose();
    scene.clear();
  };

  return { renderer, scene, camera, mouse, cleanup, resize };
}
