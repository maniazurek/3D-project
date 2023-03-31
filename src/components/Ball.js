import { Physics, useSphere } from "@react-three/cannon";
import { Vector3 } from "three";
import { angleToRadians } from "../utils/angleToRadians";

const Ball = ({ position, color }) => {
  // const [ref] = useSphere(() => ({
  //   mass: 10,
  //   position: [Math.random() *1000, Math.random() * 100, 0],
  // }));

  const [ref] = useSphere(() => ({
    args: [0.2],
    mass: 1,
    position: [Math.random(), Math.random(), 0],
  }));

  // function Ball(props) {
  //   const { args = [0.2, 32, 32], color } = props;
  //   const [ref] = useSphere(() => ({ args: [0.2], mass: 1 }));

  //   return (
  //     <mesh ref={ref}>
  //       <sphereBufferGeometry args={args} />
  //       <meshStandardMaterial color={color} />
  //     </mesh>
  //   );
  // }

  // const { viewport } = useThree();
  // const [ref] = useSphere((index) => ({
  //   mass: 100,
  //   position: [4 - Math.random() * 8, viewport.height, 0, 0],
  //   args: [1.2],
  // }));

  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color={Math.random() * 0xffff}
          roughness={0.8}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.35}
        />
      </mesh>
    </>
  );
};

export default Ball;
