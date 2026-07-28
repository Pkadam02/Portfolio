"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleRing() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random spherical particles inside a sphere of radius 1.5 in pure JS
  const [sphere] = useState(() => {
    const pointsCount = 1500;
    const coords = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.5; // sphere distribution radius
      
      coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return coords;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FF3B30"
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
}

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-transparent" />;
  }

  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 1.2] }}>
        <ParticleRing />
      </Canvas>
    </div>
  );
}
