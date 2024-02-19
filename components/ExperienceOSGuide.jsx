"use client";

import CameraPositionLogger from "@/helper/CameraPositionLogger";
import {
  CameraControls,
  ContactShadows,
  Environment,
  Text,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { OsmanityAvatarGuideAssist } from "../components/OsmanityAvatarGuideAssist";
// import { Avatar } from "@/components/Avatar";
import { useTheme } from "next-themes";
import { useChat } from "../hooks/useChat";

const Dots = (props) => {
  const { loading } = useChat();
  const [loadingText, setLoadingText] = useState("");
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingText((loadingText) => {
          if (loadingText.length > 2) {
            return ".";
          }
          return loadingText + ".";
        });
      }, 800);
      return () => clearInterval(interval);
    } else {
      setLoadingText("");
    }
  }, [loading]);
  if (!loading) return null;
  return (
    <group {...props}>
      <Text fontSize={0.14} anchorX={"left"} anchorY={"bottom"}>
        {loadingText}
        <meshBasicMaterial attach="material" color="black" />
      </Text>
    </group>
  );
};

export const ExperienceOSGuide = () => {
  const { resolvedTheme } = useTheme();
  let colors;
  if (resolvedTheme) {
    colors = "white";
  } else {
    colors = "black";
  }
  const cameraControls = useRef();
  const { cameraZoomed } = useChat();
  const { viewport } = useThree();
  useEffect(() => {
    cameraControls.current.setLookAt(0, 2, 5, 0, 1.5, 0);
  }, []);

  useEffect(() => {
    if (cameraZoomed) {
      // mobile avatar camera x:-0.28, y:0.66,  z:3.26
      cameraControls.current.setLookAt(0, 1.5, 1.5, 0, 1.5, 0, true);
    } else {
      cameraControls.current.setLookAt(0, 2.2, 5, 0, 1.0, 0, true);
    }
  }, [cameraZoomed]);
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[-5, 3, 5]} intensity={0.2} />
      <Environment preset="city" />
      <CameraControls ref={cameraControls} />

      {/* Wrapping Dots into Suspense to prevent Blink when Troika/Font is loaded */}
      <Suspense>
        <Dots position-y={1.78} position-x={0.05} />
      </Suspense>

      <group className="min-h-screen">
        <CameraPositionLogger event="mousedown" />
        <OsmanityAvatarGuideAssist />
        {/* <Avatar /> */}
        {/* <mesh scale={100} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
         
          <planeGeometry
            attach="geometry"
            args={[viewport.width, viewport.height]}
          />
          <meshBasicMaterial attach="material" color="white" />
        </mesh> */}
      </group>

      <ContactShadows opacity={0.7} />
    </>
  );
};
