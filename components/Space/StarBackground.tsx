"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "next-themes";

const StarBackground = (props: any) => {
  const { setTheme, resolvedTheme } = useTheme();
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    // ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 4;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* // <group rotation={[0, 0, Math.PI / 2]}> */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          // color={resolvedTheme === "dark" ? "#fff" : "#000"}
          // className=""
          size={0.0015}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
