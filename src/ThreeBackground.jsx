import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground({ children, color = 0x6366f1, count = 800, size = 1.5 }) {
  const mountRef = useRef(null);

  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const particlesRef = useRef();

  useEffect(() => {
    /* Scene */
    sceneRef.current = new THREE.Scene();

    /* Camera */
    cameraRef.current = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    cameraRef.current.position.z = 200;

    /* Renderer */
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);

    mountRef.current.appendChild(rendererRef.current.domElement);

    /* Particles */
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 400;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color, size, transparent: true, opacity: 0.6 });

    particlesRef.current = new THREE.Points(geometry, material);
    sceneRef.current.add(particlesRef.current);

    /* Animate */
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      particlesRef.current.rotation.y += 0.0008;
      particlesRef.current.rotation.x += 0.0004;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    /* Resize */
    const onResize = () => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* Cleanup */
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      rendererRef.current.dispose();
    };
  }, [color, count, size]);

  return <div ref={mountRef} className="three-bg">{children}</div>;
}
