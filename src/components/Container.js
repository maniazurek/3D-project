const Container = () => {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[100, 100, 100]} />
        <meshStandardMaterial opacity={0.1} transparent={true} />
      </mesh>
    </>
  );
};

export default Container;
