import React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";

import Edges from "./components/Edges";
import Ball from "./components/Ball";

const App = () => {
  return (
    <>
      <Canvas id="canvas-container" camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <Physics
          gravity={[0, 0, 0]}
          defaultContactMaterial={{ restitution: 0.9 }}
        >
          {Array(50)
            .fill()
            .map((ball) => {
              return <Ball />;
            })}
          <Edges />
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default App;
