"use client";
import { OsmanityAvatar } from "@/components/OsmanityAvatar";
import { Environment } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Leva, useControls } from "leva";

import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";

// import { UI } from "@/components/UI";
// import { Loader, OrbitControls } from "@react-three/drei";
// import { Leva } from "leva";
import { framerMotionConfig } from "@/lib/config";

const getAnimationForSection = (section) => {
  switch (section) {
    case 0:
      return "Standard Idle";
    case 1:
      return "Look Around 2";
    case 2:
      return "Standard Idle";
    case 3:
      return "Quick Formal Bow";

    // Add more cases for other sections as needed
    default:
      return "Standard Idle"; // Default animation if section is not defined
  }
};

// Define a function to get animation values based on the section
const getAnimationValues = (section) => {
  // Define default values
  let values = { z: -2, y: -4, x: 2 };

  // Customize values based on the section
  switch (section) {
    case 0:
      values = { z: -1, y: -4, x: 2 };
      break;
    case 1:
      values = { z: -3, y: -8, x: 0 };
      break;
    // Add more cases for other sections as needed
    case 2:
      values = { z: -8, y: -11, x: -3 };
      break;
    case 3:
      values = { z: -8, y: -16, x: 2 };
      break;
    // ...and so on for more sections
  }

  return values;
};

export const Experience = (props) => {
  const { section, menuOpened, isFormSubmitted } = props;
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  // State to manage the current animation
  const [currentAnimation, setCurrentAnimation] = useState(
    getAnimationForSection(section),
  );

  useEffect(() => {
    // Assuming the contact section is section 3
    if (section === 3 && isFormSubmitted) {
      setCurrentAnimation("Gangnam Style");
    } else {
      setCurrentAnimation(getAnimationForSection(section));
    }
  }, [section, isFormSubmitted]);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  // useFrame((state) => {
  //   state.camera.position.x = cameraPositionX.get();
  //   state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  // });
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
      <Leva hidden />
      {/* <UI hidden /> */}
      {/* <Sky /> */}
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[-5, 3, 5]} intensity={0.2} />
      <Environment preset="city" />
      {/* SKILLS */}
      <motion.group
        position={[0.6, -3, -6.4]}
        animate={getAnimationValues(section)}
        // animate={{
        //   z: section === 1 ? 0 : -2,
        //   y: section === 1 ? -viewport.height : -4,
        //   x: section === 1 ? 0 : 2,
        // }}
      >
        {/* 
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
       
        <Float>
            <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
              <sphereGeometry />
              <MeshDistortMaterial
                opacity={0.8}
                transparent
                distort={0.4}
                speed={4}
                color={"red"}
              />
            </mesh>
          </Float>
          <Float>
            <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
              <sphereGeometry />
              <MeshDistortMaterial
                opacity={0.8}
                transparent
                distort={1}
                speed={5}
                color="yellow"
              />
            </mesh>
          </Float>
          <Float>
            <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
              <boxGeometry />
              <MeshWobbleMaterial
                opacity={0.8}
                transparent
                factor={1}
                speed={5}
                color={"blue"}
              />
            </mesh>
          </Float> */}
        <group scale={[4, 4, 4]} position-y={-1.5}>
          {/* <ContactShadows
          opacity={0.62}
          scale={8}
          blur={1}
          far={10}
          resolution={256}
          color="#464646"
        /> */}
          {/* <OsmanityAvatar animation={currentAnimation} /> */}
          {/* <OsmanityAvatar animation={getAnimationForSection(section)} /> */}
          <OsmanityAvatar animation={currentAnimation} />
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
      </motion.group>
    </>
  );
};
