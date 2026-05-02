import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Avatar = () => {
  // Load the 3D model from the public folder
  const avatar = useGLTF("/avatar.glb");

  return (
    <mesh>
      {/* Lighting to make sure the avatar is visible and looks good */}
      <hemisphereLight intensity={1.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={avatar.scene}
        scale={2.5} // Increase or decrease to resize your avatar
        position={[0, -2.5, 0]} // Change X, Y, Z to center your avatar
        rotation={[0, -0.2, 0]} // Adjust the starting rotation
      />
    </mesh>
  );
};

const AvatarCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Avatar />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default AvatarCanvas;