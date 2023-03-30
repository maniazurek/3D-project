import { Plane } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";

const Borders = () => {
  const Plane = ({ color, ...props }) => {
    usePlane(() => ({ ...props }));
    return null;
  };
  const { viewport } = useThree();
  return (
    <>
      {/* <Plane
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        color="#fff"
      /> */}
      <mesh
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <mesh
        position={[-viewport.height / 2 - 1, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <planeGeometry />
        <meshStandardMaterial color="#fff" />
      </mesh>
      {/* <Plane
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        color="#fff"
      /> */}
      <Plane
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        color="#fff"
      />
      <Plane position={[0, 0, 1]} rotation={[0, 0, 0]} color="#fff" />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} color="#fff" />
    </>
  );
};
export default Borders;
