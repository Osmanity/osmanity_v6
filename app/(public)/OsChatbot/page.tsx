"use client";
import { ExperienceOSGuide } from "@/components/ExperienceOSGuide";
import { UI } from "@/components/UI";
// import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

const page = () => {
  return (
    <div className="h-screen w-full relative">
      {/* <Loader /> */}
      <Leva hidden={false} />
      <UI hidden={false} />
      <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
        <ExperienceOSGuide />
      </Canvas>
    </div>
  );
};

export default page;
