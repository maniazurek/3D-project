import { usePlane } from "@react-three/cannon";

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <planeGeometry args={[20, 20]} attach="geometry" />
      <meshStandardMaterial color="#8FBC8F" />
    </mesh>
  );
};

export default Ground;
