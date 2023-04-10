import React from "react";
import { useBox } from "@react-three/cannon";
import { angleToRadians } from "../utils/angleToRadians";

const Right = () => {
  const [ref] = useBox(() => ({
    args: [0.1, 20, 0.4],
    position: [10, 0, 0],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.1, 20, 0.2]} />
      <meshStandardMaterial color={"#fff"} />
    </mesh>
  );
};

const Left = () => {
  const [ref] = useBox(() => ({
    args: [0.1, 20, 0.4],
    position: [-10, 0, 0],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.1, 20, 0.2]} />
      <meshStandardMaterial color={"#fff"} />
    </mesh>
  );
};

const Top = () => {
  const [ref] = useBox(() => ({
    args: [0.1, 20, 0.4],
    position: [0, 10, 0],
    rotation: [0, 0, angleToRadians(90)],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.1, 20, 0.2]} />
      <meshStandardMaterial color={"#fff"} />
    </mesh>
  );
};

const Bottom = () => {
  const [ref] = useBox(() => ({
    args: [0.1, 20, 0.4],
    position: [0, -10, 0],
    rotation: [0, 0, angleToRadians(90)],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.1, 20, 0.2]} />
      <meshStandardMaterial color={"#fff"} />
    </mesh>
  );
};

const Back = () => {
  const [ref] = useBox(() => ({
    args: [20, 20, 1],
    position: [0, 0, -1],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[20, 20, 1]} />
      <meshStandardMaterial color={"#fff"} transparent={true} opacity={0} />
    </mesh>
  );
};

const Front = () => {
  const [ref] = useBox(() => ({ args: [20, 20, 1], position: [0, 0, 1] }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[20, 20, 1]} />
      <meshStandardMaterial color={"#fff"} transparent={true} opacity={0} />
    </mesh>
  );
};

const Edges = () => {
  return (
    <>
      <Bottom />
      <Right />
      <Left />
      <Top />
      <Back />
      <Front />
    </>
  );
};

export default Edges;
