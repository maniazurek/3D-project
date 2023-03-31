import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";

import Ball from "./Ball";
import Edges from "./Edges";
import Bottom from "./Bottom";

const Project = () => {
  return (
    <>
      <Canvas id="canvas-container" camera={{ position: [10, 0, 0] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Physics
          gravity={[0, -10, 0]}
          defaultContactMaterial={{ restitution: 0.5 }}
        >
          {/* <Edges /> */}

          {Array(50)
            .fill()
            .map((ball) => {
              return <Ball />;
            })}
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Project;
