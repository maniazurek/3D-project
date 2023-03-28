import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useSphere, useBox } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import Ball from "./Ball";

// function Ball(props) {
//   const { args = [0.2, 32, 32], color } = props;
//   const [ref] = useSphere(() => ({ args: [0.2], mass: 1 }));

//   return (
//     <mesh ref={ref}>
//       <sphereBufferGeometry args={args} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

function Ground(props) {
  const { args = [10, 1, 2] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(-0.1, -5, 0);
    api.rotation.set(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

function Ground2(props) {
  const { args = [10, 1, 2] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(4.55, 0, 0);
    api.rotation.set(0, 0, 1.56);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

function Ground3(props) {
  const { args = [10, 1, 2] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(-4.65, 0, 0);
    api.rotation.set(0, 0, 1.56);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

function Ground4(props) {
  const { args = [10, 1, 2] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, 5, 0);
    api.rotation.set(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

function Ground5(props) {
  const { args = [10, 1, 2] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, 10, 0);
    api.rotation.set(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

export default function App() {
  const [balls, setBalls] = useState([]);
  const colors = ["#173f5f", "#20639b", "#ff4f79", "#C44536", "#ed553b"];

  return (
    <Canvas onClick={(e) => onCanvasClicked(e)} id="canvas-container">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Physics
        gravity={[0, -10, 0]}
        defaultContactMaterial={{ restitution: 0.9 }}
      >
        {/* {balls.map((props) => (
          <Ball {...props} />
        ))} */}
        {Array(100)
          .fill()
          .map((ball) => {
            return <Ball />;
          })}
        <Ground />
        <Ground2 />
        <Ground3 />
        <Ground4 />
        <Ground5 />
      </Physics>
      <OrbitControls />
    </Canvas>
  );

  function onCanvasClicked(e) {
    let newBalls = [...balls];
    const color = colors[getRandomInt(6)];
    newBalls.push({ color: color });
    setBalls([...newBalls]);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
