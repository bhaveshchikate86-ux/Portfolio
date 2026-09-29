import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const KineticCore: React.FC = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 9);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x18304a, 2.5));
    const cyanLight = new THREE.PointLight(0x38bdf8, 45, 30);
    cyanLight.position.set(5, 4, 5);
    scene.add(cyanLight);
    const violetLight = new THREE.PointLight(0x818cf8, 32, 30);
    violetLight.position.set(-5, -3, 4);
    scene.add(violetLight);

    const core = new THREE.Group();
    scene.add(core);

    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.55, 2),
      new THREE.MeshPhongMaterial({
        color: 0x07111e,
        emissive: 0x06304a,
        specular: 0x38bdf8,
        shininess: 90,
        flatShading: true,
      }),
    );
    core.add(shell);

    const wireframe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.58, 2),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.24 }),
    );
    core.add(wireframe);

    const rings: THREE.Mesh[] = [];
    [
      { radius: 2.1, color: 0x38bdf8, x: 0.6, y: 0.2 },
      { radius: 2.55, color: 0x818cf8, x: -0.8, y: 0.7 },
      { radius: 3, color: 0x34d399, x: 1.1, y: -0.5 },
    ].forEach(({ radius, color, x, y }) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.012, 8, 96),
        new THREE.MeshStandardMaterial({
          color,
          emissive: color,
          emissiveIntensity: 0.5,
          roughness: 0.25,
          metalness: 0.8,
          transparent: true,
          opacity: 0.7,
        }),
      );
      ring.rotation.set(x, y, 0);
      core.add(ring);
      rings.push(ring);
    });

    const nodes = new THREE.Group();
    const nodeGeometry = new THREE.BoxGeometry(0.075, 0.075, 0.075);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x67e8f9, transparent: true, opacity: 0.8 });
    const nodeCount = window.innerWidth < 700 ? 20 : 32;
    for (let i = 0; i < nodeCount; i += 1) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 1.95 + (i % 3) * 0.32;
      node.position.set(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      );
      nodes.add(node);
    }
    core.add(nodes);

    const particleCount = window.innerWidth < 700 ? 100 : 190;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particlePositions.length; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 17;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 9;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const resize = () => {
      const width = host.clientWidth || window.innerWidth;
      const height = host.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();

    const pointer = { x: 0, y: 0 };
    const updatePointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    const onVisibilityChange = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else frame = requestAnimationFrame(animate);
    };
    let scrollProgress = 0;
    const updateScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress = window.scrollY / maxScroll;
    };
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();
    let frame = 0;

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const targetY = 0.3 - scrollProgress * 1.5;
      core.position.y += (targetY - core.position.y) * 0.04;
      core.rotation.y += ((pointer.x * 0.42 + elapsed * 0.2 + scrollProgress * Math.PI) - core.rotation.y) * 0.035;
      core.rotation.x += ((pointer.y * 0.24 + Math.sin(elapsed * 0.35) * 0.12 + scrollProgress * 0.6) - core.rotation.x) * 0.035;
      rings[0].rotation.z += 0.003;
      rings[1].rotation.x += 0.0025;
      rings[2].rotation.y += 0.004;
      nodes.rotation.y -= 0.0025;
      particles.rotation.y = elapsed * 0.018;
      renderer.render(scene, camera);
      if (reducedMotion) {
        cancelAnimationFrame(frame);
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', updatePointer, { passive: true });
    window.addEventListener('scroll', updateScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    updateScroll();
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('scroll', updateScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="kinetic-canvas" aria-hidden="true" />;
};
