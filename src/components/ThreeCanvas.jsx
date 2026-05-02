import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const Knot = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Auto rotation
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
    
    // Parabolic mouse interaction tracking
    const targetX = (state.pointer.x * Math.PI) * 0.25;
    const targetY = (state.pointer.y * Math.PI) * 0.25;
    
    meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
    meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef} scale={1.8}>
        {/* An intricate wireframe torus knot to look hyper-tech */}
        <torusKnotGeometry args={[9, 2.5, 300, 40]} />
        <MeshDistortMaterial 
          color="#111111" 
          wireframe 
          wireframeLinewidth={2}
          distort={0.4} 
          speed={2} 
          emissive="#ff4d00" 
          emissiveIntensity={0.8} 
        />
      </mesh>
    </Float>
  );
};

export default function ThreeCanvas() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 35], fov: 45 }} style={{ pointerEvents: 'auto' }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 20, 10]} intensity={2} color="#ff4d00" />
        <Knot />
      </Canvas>
    </div>
  );
}
