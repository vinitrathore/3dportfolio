import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Computers = ({ screenWidth }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.geometry?.attributes?.position) {
        const positionArray = child.geometry.attributes.position.array;
        if (Array.from(positionArray).some((val) => isNaN(val))) {
          console.warn(`Invalid geometry in mesh: ${child.name}`);
          child.visible = false;
        }
      }
    });
  }, [scene]);

  // Responsive scale and position centered in viewport
  const getResponsiveProps = (width) => {
    if (width <= 500) {
      return { scale: 0.48, position: [0, -3.0, -2.2], rotation: [-0.01, -0.2, -0.1] };
    } else if (width <= 768) {
      return { scale: 0.58, position: [0, -3.1, -1.8], rotation: [-0.01, -0.2, -0.1] };
    } else if (width <= 1024) {
      return { scale: 0.68, position: [0, -3.25, -1.5], rotation: [-0.01, -0.2, -0.1] };
    } else {
      return { scale: 0.75, position: [0, -3.25, -1.5], rotation: [-0.01, -0.2, -0.1] };
    }
  };

  const { scale, position, rotation } = getResponsiveProps(screenWidth);

  return (
    <mesh>
      <hemisphereLight intensity={0.65} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={Math.PI / 1.5} />
      <pointLight intensity={5} />
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ cursor: "grab" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers screenWidth={screenWidth} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

useGLTF.preload("/desktop_pc/scene.gltf");

export default ComputersCanvas;
