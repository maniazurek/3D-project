import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from "../utils/angleToRadians";
import * as THREE from "three";
import gsap from "gsap";
import { Physics, useSphere, useBox } from "@react-three/cannon";

const Three = () => {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(60));
      orbitControlsRef.current.update();
    }
  });

  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {
      console.log(ballRef.current.position);

      const timeline = gsap.timeline({ paused: true });

      timeline.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: "power2.out",
      });

      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 1.5,
          ease: "bounce.out",
        },
        "<"
      );

      timeline.play();
    }
  }, [ballRef.current]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 10, 5]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
      />
      <mesh position={[-2, 2.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#fff" metalness={0.6} roughness={0.6} />
      </mesh>
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>
      <ambientLight args={["#fff", 0.25]} />
      <spotLight
        args={["#fff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#2266cc" />
        </mesh>
      </Environment>
    </>
  );
};

export default Three;
