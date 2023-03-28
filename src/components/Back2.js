import { usePlane } from "@react-three/cannon";

const Back2 = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0,80,0]
    
  }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <planeGeometry args={[80, 80]} attach="geometry" />
      <meshStandardMaterial color="#8FBC8F" transparent={true} opacity={0.3}/>
    </mesh>
  );
};

export default Back2;
