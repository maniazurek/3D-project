import { Physics, usePlane } from "@react-three/cannon";
import { Environment, OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Ball from "./components/Ball";
import Container from "./components/Container";
import Ground from "./components/Ground";
import Three from "./components/Three";
import { angleToRadians } from "./utils/angleToRadians";
import * as THREE from "three";
import Borders from "./components/Borders";
import Rounded from "./components/Rounded";

const App = () => {
  return (
    <Canvas id="canvas-container" shadows camera={{ position: [0, 150, 0] }}>
      <pointLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        {/* <Three /> */}
        <Physics>
          {/* <Ball position={[0.5, 7, 0]} color="#E9967A" />
          <Ball position={[0, 5, 0]} color="#ADD8E6" />
          <Ball position={[-0.5, 9, 0]} color="#FFB6C1" /> */}
          {Array(100)
            .fill()
            .map((ball) => {
              return (
                <Ball position={[0, 1, 0]} color={Math.random() * 0xffff} />
              );
            })}
          <Ground />
          {/* <Container /> */}
          {/* <Borders /> */}
        </Physics>
      </Suspense>
      <OrbitControls />
      <ambientLight args={["#fff", 0.25]} />
      <spotLight
        args={["#fff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#fff" />
        </mesh>
      </Environment>
    </Canvas>
    // <Rounded />
  );
};

export default App;
