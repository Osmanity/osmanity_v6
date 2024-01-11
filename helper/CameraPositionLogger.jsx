"use client";

import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const CameraPositionLogger = ({ event }) => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  useEffect(() => {
    const logCameraPosition = () => {
      const { z, y, x } = cameraRef.current.position;
      const roundedY = Math.round(y * 100) / 100;
      const roundedX = Math.round(x * 100) / 100;
      const roundedZ = Math.round(z * 100) / 100;
      console.log(
        `Camera position: x:${roundedX}, y:${roundedY},  z:${roundedZ} `,
      );
    };
    cameraRef.current = camera;
    window.addEventListener(event, logCameraPosition);
    return () => {
      window.removeEventListener(event, logCameraPosition);
    };
  }, []);

  return null;
};

export default CameraPositionLogger;
