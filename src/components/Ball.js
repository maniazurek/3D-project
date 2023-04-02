import { useSphere } from "@react-three/cannon";

const Ball = () => {
  const [ref] = useSphere(() => ({
    args: [0.2],
    mass: 1,
    position: [Math.random(), Math.random(), 0],
  }));

  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color={Math.random() * 0x16777215} />
      </mesh>
    </>
  );
};

export default Ball;
