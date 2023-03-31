import { angleToRadians } from "../utils/angleToRadians";
import { useFrame } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";

const Bottom = (props) => {
  const { args = [20, 1, 1] } = props;
  const [ref, api] = useBox(() => ({ args }));

    useFrame(() => {
      api.position.set(0, -10, 0);
      api.rotation.set(angleToRadians(90), 0, 0);
    });

  return (
    <mesh ref={ref}>
      <planeGeometry args={args} />
      <meshStandardMaterial color={"#fff"} transparent={true} opacity={0} />
    </mesh>
  );
};

export default Bottom;
