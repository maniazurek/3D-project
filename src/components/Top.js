import { usePlane } from "@react-three/cannon";

const Top = () => {
  const [ref] = usePlane(() => ({
    rotation: [Math.PI / 360, 0, 0],
    position: [0, 40, -40],
  }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <planeGeometry args={[80, 80]} attach="geometry" />
      <meshStandardMaterial color="#8FBC8F" transparent={true} opacity={0.5}/>
    </mesh>
  );
};

export default Top;
