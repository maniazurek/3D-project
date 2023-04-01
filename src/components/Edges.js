import React from "react";
import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { angleToRadians } from "../utils/angleToRadians";

function Right(props) {
  const { args = [0.1, 20, 0.4] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(10, 0, 0);
    api.rotation.set(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={"#fff"} />
    </mesh>
  );
}

function Left(props) {
  const { args = [0.1, 20, 0.4] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(-10, 0, 0);
    api.rotation.set(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={"#fff"} />
    </mesh>
  );
}

function Top(props) {
  const { args = [0.1, 20, 0.4] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, 10, 0);
    api.rotation.set(0, 0, angleToRadians(90));
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={"#fff"} />
    </mesh>
  );
}

function Bottom(props) {
  const { args = [0.1, 20, 0.4] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, -10, 0);
    api.rotation.set(0, 0, angleToRadians(90));
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
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
      <boxGeometry args={args} />
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
