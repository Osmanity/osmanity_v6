"use client";
// import { delay } from "@/lib/delay";
import { Experience } from "@/components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Interface from "./Interface/Interface";

type Props = {};

const page = async (props: Props) => {
  // await delay(5000);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <div className="h-screen w-full">
      <Canvas shadows camera={{ position: [-2, 0.5, 5], fov: 45 }}>
        <color attach="background" args={["#ececec"]} />
        {/* <color attach="background" args={["#000000"]} /> */}
        <ScrollControls pages={4} damping={0.1}>
          <Scroll>
            {/* <Experience section={section} menuOpened={menuOpened} /> */}
            <Experience />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>

      {/* <div className=" absolute z-5 flex flex-1 flex-col  w-full items-start justify-center bg-gradient-to-l from-black/70 from-30% via-black/50 via-100% sm:via-80% p-10 h-full">
        <h2 className="sm:text-6xl text-2xl font-semibold">
          {"Hi! I'm Ibrahim Osman:"}
          <TypeAnimation
            sequence={[
              "- Fullstack Developer", // Types 'One'
              3000, // Waits 1s
              "- Computer Engineer", // Deletes 'One' and types 'Two'
              3000, // Waits 2s
              "- UI/UX Designer", // Types 'Three' without deleting 'Two'
              3000,
              // () => {
              //   console.log("Done typing!"); // Place optional callbacks anywhere in the array
              // },
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{
              textAlign: "left",
              // paddingTop: "10px",
              // paddingBottom: "30px",
            }}
          />
        </h2>

        <p className="text-white/50 mt-4 max-w-3xl text-xl">
          I am an innovative, detail-oriented and dynamic software developer
          with specialization in MERN stack. Seeking a responsible and
          challanging career, looking forward to honing the skills and knowledge
          of engineering and as a designer.
        </p>
      </div> */}
    </div>
  );
};

export default page;
