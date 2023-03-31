import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useSphere, useBox } from "@react-three/cannon";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ball from "./Ball";
import { TorusGeometry } from "three";
import { angleToRadians } from "../utils/angleToRadians";
import Borders from "./Borders";
import Bottom from "./Bottom";
import Edges from "./Edges";

// function Bottom(props) {
//   const { args = [20, 10, 1] } = props;
//   const [ref, api] = useBox(() => ({ args }));

//   useFrame(() => {
//     api.position.set(0, -10, 0);
//     api.rotation.set(angleToRadians(90), 0, 0);
//   });

//   return (
//     <mesh ref={ref}>
//       <boxBufferGeometry args={args} />
//       <meshStandardMaterial color={"yellow"} />
//     </mesh>
//   );
// }

function Right(props) {
  const { args = [20, 1, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(10, 0, 0);
    api.rotation.set(angleToRadians(90), angleToRadians(90), 0);
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={args} />
      <meshStandardMaterial color={"#fff"} transparent={true} opacity={0} />
    </mesh>
  );
}

function Left(props) {
  const { args = [20, 1, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(-10, 0, 0);
    api.rotation.set(-angleToRadians(90), -angleToRadians(90), 0);
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={args} />
      <meshStandardMaterial color={"#fff"} transparent={true} opacity={0} />
    </mesh>
  );
}

function Top(props) {
  const { args = [20, 1, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, 10, 0);
    api.rotation.set(-angleToRadians(90), 0, 0);
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={args} />
      <meshStandardMaterial color={"#fff"} />
    </mesh>
  );
}

function Back(props) {
  const { args = [20, 20, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, 0, -1);
    api.rotation.set(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={args} />
      <meshStandardMaterial color={"#fff"} transparent={true} opacity={0} />
    </mesh>
  );
}

function Front(props) {
  const { args = [20, 20, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, 0, 1);
    api.rotation.set(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={args} />
      <meshStandardMaterial color={"#fff"} transparent={true} opacity={0} />
    </mesh>
  );
}

function Circle(props) {
  const { args = [15, 1, 5, 100] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, 10, 0);
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function App() {
  return (
    <>
      <Canvas id="canvas-container" camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Physics
          gravity={[0, 0, 0]}
          defaultContactMaterial={{ restitution: 0.99 }}
        >
          {Array(30)
            .fill()
            .map((ball) => {
              return <Ball />;
            })}
          <Bottom />
          <Right />
          <Left />
          <Top />
          <Back />
          <Front />
          {/* <Edges /> */}
          {/* <Circle /> */}
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
  );
}
