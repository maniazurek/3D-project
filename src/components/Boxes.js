import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stats } from "@react-three/drei";

const Boxes = () => {
  const boxes = [];

  for (let i = 0; i < 1000; i++) {
    const x = Math.random();
    const y = Math.random();
    const z = Math.random();

    const box = (
      <mesh position={[x, y, z]}>
        <boxGeometry args={[0.01, 0.01, 0.01]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    );

    boxes.push(box);
  }

  return (
    <Canvas camera={{ position: [10, 10, 10] }} id="canvas-container ">
      <pointLight position={[15, 15, 15]} />
      {boxes}
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

export default Boxes;
