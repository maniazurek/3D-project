import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useSphere, useBox } from "@react-three/cannon";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ball from "./Ball";
import { TorusGeometry } from "three";
import { angleToRadians } from "../utils/angleToRadians";
import Borders from "./Borders";

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

function Bottom(props) {
  const { args = [20, 10, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, -10, 0);
    api.rotation.set(angleToRadians(90), 0, 0);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
}

function Right(props) {
  const { args = [20, 2, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(10, 0, 0);
    api.rotation.set(angleToRadians(90), angleToRadians(90), 0);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

function Left(props) {
  const { args = [20, 2, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(-10, 0, 0);
    api.rotation.set(-angleToRadians(90), -angleToRadians(90), 0);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}

function Top(props) {
  const { args = [20, 2, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, 10, 0);
    api.rotation.set(-angleToRadians(90), 0, 0);
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"pink"} />
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
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"grey"}  />
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
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={"brown"} transparent={true} opacity={0.5}/>
    </mesh>
  );
}

const Circle = (props) => {
  const { args = [20, 0.1, 5, 100] } = props;
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
};

export default function App() {
  const [balls, setBalls] = useState([]);
  const colors = ["#173f5f", "#20639b", "#ff4f79", "#C44536", "#ed553b"];

  return (
    <>
      <Canvas
        onClick={(e) => onCanvasClicked(e)}
        id="canvas-container"
      
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Physics
          gravity={[0, -26, 0]}
          defaultContactMaterial={{ restitution: 1.1 }}
        >
          {/* {balls.map((props) => (
          <Ball {...props} />
        ))} */}
          {Array(100)
            .fill()
            .map((ball) => {
              return <Ball />;
            })}
          {/* <Bottom />
          <Right />
          <Left />
          <Top />
          <Back />
          <Front /> */}
          <Borders/>
          {/* <Circle/> */}
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
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
