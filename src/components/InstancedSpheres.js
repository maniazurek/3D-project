import { useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";

const InstancedSpheres = ({ count = 200 }) => {
  const { viewport } = useThree();
  const [ref] = useSphere((index) => ({
    mass: 100,
    position: [4 - Math.random() * 8, viewport.height, 0, 0],
    args: [1.2],
  }));
  
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, count]}
    >
      <sphereBufferGeometry args={[1.2, 62, 62]} />
      <meshStandardMaterial color="#ccf0a4" roughness={0} />
    </instancedMesh>
  );
};

export default InstancedSpheres;
