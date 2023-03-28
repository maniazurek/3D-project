import { Physics, useSphere } from "@react-three/cannon";
import { Vector3 } from "three";
import { angleToRadians } from "../utils/angleToRadians";

const Ball = ({ position, color }) => {
  const [ref] = useSphere(() => ({
    mass: 100,
    position: [Math.random() * 10, Math.random() * 10, Math.random() * 10],
  }));
  return (
    <>
      <Physics>
        <mesh ref={ref}>
          <sphereGeometry args={[2, 32, 32]} color="#fff" />
          <meshStandardMaterial
            color={color}
            roughness={0.8}
            metalness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.35}
          />
        </mesh>
      </Physics>
    </>
  );
};

export default Ball;
