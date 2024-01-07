"use client";
import { OsmanityAvatar } from "@/components/OsmanityAvatar";
import { ContactShadows, Environment } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

// import { UI } from "@/components/UI";
// import { Loader, OrbitControls } from "@react-three/drei";
// import { Leva } from "leva";

export const Experience = () => {
  const { viewport } = useThree();
  const { animation } = useControls({
    animation: {
      value: "Standard Idle",
      options: [
        "Acknowledging",
        "Agreeing",
        "Angry",
        "Breathing Idle",
        "Cocky Head Turn",
        "Hands Forward Gesture",
        "Head Nod Yes",
        "Laughing",
        "Lengthy Head Nod",
        "Look Around",
        "Look Around 2",
        "Quick Formal Bow",
        "Standard Idle",
        "Talking",
        "Talking 2",
        "Thoughtful Head Shake",
        "Waving",
      ],
    },
  });
  return (
    <>
      {/* <Loader /> */}
      {/* <Leva /> */}
      {/* <UI hidden /> */}
      {/* <Sky /> */}
      {/* <OrbitControls /> */}
      <Environment preset="city" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.62}
          scale={8}
          blur={1}
          far={10}
          resolution={256}
          color="#464646"
        />

        <OsmanityAvatar animation={animation || "Standard Idle"} />
        {/* {animation === "Standard Idle" && (
          <mesh scale={[1.5, 0.02, 0.7]} position={[-0.1, 0.8, 0.7]}>
            <boxGeometry />
            <meshStandardMaterial color="black" />
          </mesh>
        )} */}
        <mesh scale={100} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          {/* <planeGeometry /> */}
          {/* <meshStandardMaterial color="white" /> */}
          {/* <meshStandardMaterial color="black" /> */}
          <planeBufferGeometry
            attach="geometry"
            args={[viewport.width, viewport.height]}
          />
          <meshBasicMaterial attach="material" color="white" />
        </mesh>
        {/* <boxGeometry />
        <meshNormalMaterial /> */}
        {/* </mesh> */}
      </group>
      <ambientLight intensity={1} />
    </>
  );
};
