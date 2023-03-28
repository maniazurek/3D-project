import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import InstancedSpheres from "./InstancedSpheres";
import Borders from "./Borders";
import Mouse from "./Mouse";
import Ball from "./Ball";

const Rounded = () => {
  return (
    <Canvas
      id="canvas-container"
      shadows
      //   gl={{ stencil: false, antialias: false }}
      camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}
    >
      {/* <fog attach="fog" args={["#a2f14a", 25, 35]} /> */}
      <color attach="background" args={["t"]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <directionalLight
        castShadow
        intensity={6}
        position={[50, 50, 25]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={null}>
        <Physics
          gravity={[0, -50, 0]}
          defaultContactMaterial={{ restitution: 0.9 }}
        >
          <group position={[0, 0, -100]}>
            {/* <InstancedSpheres /> */}
            {Array(100)
              .fill()
              .map((ball) => {
                return (
                  <Ball position={[0, 0, 0]} color={Math.random() * 0xffff} />
                );
              })}

            <Borders />
          </group>
        </Physics>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Rounded;
