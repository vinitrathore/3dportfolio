import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Computers = ({ screenWidth }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  const groupRef = useRef();

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

  // Responsive scale, position, and rotation
  const getResponsiveProps = (width) => {
    if (width <= 360) {
      return { scale: 0.35, position: [-3.7, -2, -1.5], baseRotation: [-0.02, -0.3, -0.1] };
    } else if (width <= 400) {
      return { scale: 0.45, position: [-3.3, -2, -1.5], baseRotation: [-0.015, -0.55, -0.1] };
    } else if (width <= 601) {
      return { scale: 0.55, position: [-3.3, -1, -1.5], baseRotation: [-0.015, -0.55, -0.1] };
    } else if (width <= 768) {
      return { scale: 0.65, position: [-3.2, -2.8, -1.5], baseRotation: [-0.01, -0.2, -0.1] };
    } else {
      return { scale: 0.75, position: [-3.0, -2.6, -1.5], baseRotation: [-0.005, -0.15, -0.1] };
    }
  };

  const { scale, position, baseRotation } = getResponsiveProps(screenWidth);

  // Smoothly move 3D model ONLY along horizontal X-axis (rotating around Y-axis)
  useFrame((state) => {
    if (groupRef.current) {
      const targetY = baseRotation[1] + state.pointer.x * 0.45;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
      groupRef.current.rotation.x = baseRotation[0];
      groupRef.current.rotation.z = baseRotation[2];
    }
  });

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
      <group ref={groupRef} position={position} rotation={baseRotation}>
        <primitive object={scene} scale={scale} />
      </group>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop="always"
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

export default ComputersCanvas;
