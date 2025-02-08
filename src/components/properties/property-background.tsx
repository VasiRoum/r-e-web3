'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

// ETH logo vertices (simplified)
const ETH_VERTICES = [
  // Outer hexagon
  0.0, 1.0, 0.0,    // top
  0.866, 0.5, 0.0,  // top right
  0.866, -0.5, 0.0, // bottom right
  0.0, -1.0, 0.0,   // bottom
  -0.866, -0.5, 0.0,// bottom left
  -0.866, 0.5, 0.0, // top left
  
  // Inner lines (simplified ETH shape)
  0.0, 0.5, 0.0,    // center top
  0.433, 0.25, 0.0, // center right
  0.433, -0.25, 0.0,// center right bottom
  0.0, -0.5, 0.0,   // center bottom
  -0.433, -0.25, 0.0,// center left bottom
  -0.433, 0.25, 0.0, // center left
];

export function PropertyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    const updateSize = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    updateSize();
    containerRef.current.appendChild(renderer.domElement);

    // Create particles based on ETH logo
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 15000;
    const positions = new Float32Array(particlesCount * 3);
    const scales = new Float32Array(particlesCount);
    const colors = new Float32Array(particlesCount * 3);

    // Function to get random ETH vertex
    const getRandomEthVertex = () => {
      const vertexIndex = Math.floor(Math.random() * (ETH_VERTICES.length / 3)) * 3;
      return {
        x: ETH_VERTICES[vertexIndex] * 3,
        y: ETH_VERTICES[vertexIndex + 1] * 3,
        z: ETH_VERTICES[vertexIndex + 2]
      };
    };

    // Initialize particles with random positions around ETH vertices
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const vertex = getRandomEthVertex();
      const spread = 2;
      
      positions[i] = vertex.x + (Math.random() - 0.5) * spread;
      positions[i + 1] = vertex.y + (Math.random() - 0.5) * spread;
      positions[i + 2] = vertex.z + (Math.random() - 0.5) * 0.5;
      
      scales[i / 3] = Math.random();

      // Set colors based on theme
      const color = theme === 'dark' 
        ? new THREE.Color(0x6366f1).multiplyScalar(Math.random() * 0.5 + 0.5)  // Indigo in dark mode
        : new THREE.Color(0x3b82f6).multiplyScalar(Math.random() * 0.3 + 0.7); // Blue in light mode
      
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Enhanced shader material
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float scale;
        attribute vec3 color;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float strength = distance(gl_PointCoord, vec2(0.5));
          strength = 1.0 - strength;
          strength = pow(strength, 3.0);
          
          vec3 finalColor = vColor;
          float alpha = strength * ${theme === 'dark' ? '0.8' : '0.6'};
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Camera position
    camera.position.z = 8;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    const mouseLerpFactor = 0.05;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation
    let previousTime = 0;
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - previousTime) / 1000;
      previousTime = currentTime;

      requestAnimationFrame(animate);

      // Smooth mouse movement
      targetX += (mouseX - targetX) * mouseLerpFactor;
      targetY += (mouseY - targetY) * mouseLerpFactor;

      // Rotate ETH symbol
      particlesMesh.rotation.y += (targetX - particlesMesh.rotation.y) * 0.05;
      particlesMesh.rotation.x += (targetY - particlesMesh.rotation.x) * 0.05;

      // Gentle floating motion
      particlesMesh.position.y = Math.sin(currentTime * 0.001) * 0.3;
      particlesMesh.position.x = Math.cos(currentTime * 0.001) * 0.3;

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      updateSize();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return <div ref={containerRef} className="w-full h-full" />;
} 