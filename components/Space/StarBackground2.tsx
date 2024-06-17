import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "next-themes";
import { Suspense, useRef, useState } from "react";

const StarBackground = (props) => {
  const { resolvedTheme } = useTheme();
  const ref = useRef<THREE.Points>(null);
  const [spheres] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta / 3.5;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={spheres} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={resolvedTheme === "dark" ? "#fff" : "#000"}
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
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
