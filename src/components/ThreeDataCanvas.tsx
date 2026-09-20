import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeDataCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Data Nodes Network (Connected Constellation)
    const particleCount = 70;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const bounds = 65;
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * bounds * 2;
      const y = (Math.random() - 0.5) * bounds * 1.5;
      const z = (Math.random() - 0.5) * 50;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.03
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Material with subtle cyan & blue colors
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 1.8,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Dynamic Connecting Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    });

    const maxLineSegments = 300;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // 2. Abstract Geometric Data Objects (Cylinders for DBs, floating rings, wireframe cubes)
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    // Floating Database Cylinder
    const dbGeometry = new THREE.CylinderGeometry(3.5, 3.5, 5, 16, 2, true);
    const dbWireframe = new THREE.WireframeGeometry(dbGeometry);
    const dbMaterial = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.28
    });
    const dbMesh = new THREE.LineSegments(dbWireframe, dbMaterial);
    dbMesh.position.set(-42, 18, -10);
    objectsGroup.add(dbMesh);

    // Floating Bar Chart / Data Column Group
    const barGroup = new THREE.Group();
    barGroup.position.set(45, -15, -15);
    for (let i = 0; i < 4; i++) {
      const h = 4 + i * 3.5;
      const colGeo = new THREE.BoxGeometry(2, h, 2);
      const colEdges = new THREE.EdgesGeometry(colGeo);
      const colLine = new THREE.LineSegments(
        colEdges,
        new THREE.LineBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.35 })
      );
      colLine.position.set(i * 3.5 - 5, h / 2 - 5, 0);
      barGroup.add(colLine);
    }
    objectsGroup.add(barGroup);

    // Floating Ring / Donut (Power BI donut chart abstraction)
    const torusGeo = new THREE.TorusGeometry(5, 0.4, 8, 32);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(38, 22, -20);
    objectsGroup.add(torusMesh);

    // Floating Grid Floor (Subtle Excel spreadsheet grid representation)
    const gridHelper = new THREE.GridHelper(90, 20, 0x00f2fe, 0x1e293b);
    gridHelper.position.y = -35;
    if (Array.isArray(gridHelper.material)) {
      gridHelper.material.forEach((m) => {
        m.transparent = true;
        m.opacity = 0.12;
      });
    } else {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.12;
    }
    scene.add(gridHelper);

    // Mouse parallax tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        camera.position.x = mouseX * 12;
        camera.position.y = -mouseY * 8;
        camera.lookAt(0, 0, 0);

        // Slowly rotate decorative objects
        dbMesh.rotation.y += 0.008;
        dbMesh.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;

        barGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.3;
        barGroup.position.y = -15 + Math.sin(elapsedTime * 0.8) * 1.5;

        torusMesh.rotation.x += 0.006;
        torusMesh.rotation.y += 0.009;
      }

      // Update particle positions
      const pos = particles.geometry.attributes.position.array as Float32Array;
      let lineIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        if (!prefersReducedMotion) {
          pos[i * 3] += velocities[i].x;
          pos[i * 3 + 1] += velocities[i].y;
          pos[i * 3 + 2] += velocities[i].z;

          // Bounce off bounds
          if (pos[i * 3] < -bounds || pos[i * 3] > bounds) velocities[i].x *= -1;
          if (pos[i * 3 + 1] < -bounds * 0.7 || pos[i * 3 + 1] > bounds * 0.7) velocities[i].y *= -1;
          if (pos[i * 3 + 2] < -30 || pos[i * 3 + 2] > 30) velocities[i].z *= -1;
        }

        // Connect nearby nodes with lines
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < 420 && lineIndex < maxLineSegments * 6 - 6) {
            linePositions[lineIndex++] = pos[i * 3];
            linePositions[lineIndex++] = pos[i * 3 + 1];
            linePositions[lineIndex++] = pos[i * 3 + 2];

            linePositions[lineIndex++] = pos[j * 3];
            linePositions[lineIndex++] = pos[j * 3 + 1];
            linePositions[lineIndex++] = pos[j * 3 + 2];
          }
        }
      }

      // Fill remainder with zeros
      for (let k = lineIndex; k < maxLineSegments * 6; k++) {
        linePositions[k] = 0;
      }

      particles.geometry.attributes.position.needsUpdate = true;
      lines.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      dbGeometry.dispose();
      dbWireframe.dispose();
      dbMaterial.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      gridHelper.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={{ opacity: 0.85 }}
    />
  );
};
