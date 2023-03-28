import { usePlane } from "@react-three/cannon";

const Back = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <planeGeometry args={[80, 80]} attach="geometry" />
      <meshStandardMaterial color="#8FBC8F" />
    </mesh>
  );
};

export default Back;
