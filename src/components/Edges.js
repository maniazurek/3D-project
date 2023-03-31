import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

const Edges = (props) => {
  const { args = [10, 1, 100, 500] } = props;
  const [ref, api] = useBox(() => ({ args }));

  useFrame(() => {
    api.position.set(0, 0, 0);
    api.rotation.set(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Edges;
