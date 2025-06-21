// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "./Loader";

// const Computers = ({ isMobile }) => {
//   const { scene } = useGLTF("/desktop_pc/scene.gltf"); // Ensure path is correct (in public/ folder)
//   const width = window.innerWidth;

//   useEffect(() => {
//     // Traverse the scene and hide any mesh with NaN positions
//     scene.traverse((child) => {
//       if (child.isMesh && child.geometry?.attributes?.position) {
//         const positionArray = child.geometry.attributes.position.array;
//         if (Array.from(positionArray).some((val) => isNaN(val))) {
//           console.warn(`Invalid geometry detected in mesh: ${child.name}`);
//           child.visible = false;
//         }
//       }
//     });
//   }, [scene]);

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.5} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.15}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <ambientLight intensity={Math.PI / 1.5} />
//       <pointLight intensity={5} />
//       <primitive
//         object={scene}
//         scale={
//           width <= 360
//             ? 0.35
//             : width <= 601
//             ? 0.55
//             : width <= 768
//             ? 0.65
//             : 0.75
//         }
//         position={
//           width <= 360
//             ? [-3.7, -2, -1.5]
//             : width <= 601
//             ? [-3.3, -1, -1.5]
//             : width <= 768
//             ? [-3.2, -2.8, -1.5]
//             : [-3.0, -2.6, -1.5]
//         }
//         rotation={
//           width <= 360
//             ? [-0.02, -0.3, -0.1]
//             : width <= 601
//             ? [-0.015, -0.55, -0.1]
//             : width <= 768
//             ? [-0.01, -0.2, -0.1]
//             : [-0.005, -0.15, -0.1]
//         }
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 600px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;




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

  // Responsive scale, position, and rotation
  const getResponsiveProps = (width) => {
    if (width <= 360) {
      return { scale: 0.35, position: [-3.7, -2, -1.5], rotation: [-0.02, -0.3, -0.1] };
    } else if (width <= 601) {
      return { scale: 0.55, position: [-3.3, -1, -1.5], rotation: [-0.015, -0.55, -0.1] };
    } else if (width <= 768) {
      return { scale: 0.65, position: [-3.2, -2.8, -1.5], rotation: [-0.01, -0.2, -0.1] };
    } else {
      return { scale: 0.75, position: [-3.0, -2.6, -1.5], rotation: [-0.005, -0.15, -0.1] };
    }
  };

  const { scale, position, rotation } = getResponsiveProps(screenWidth);

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={Math.PI / 1.5} />
      <pointLight intensity={5} />
      <primitive object={scene} scale={scale} position={position} rotation={rotation} />
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
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers screenWidth={screenWidth} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
