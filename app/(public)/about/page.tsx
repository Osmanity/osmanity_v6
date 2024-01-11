"use client";
// import { delay } from "@/lib/delay";
import { Experience } from "@/components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Interface from "./Interface/Interface";

import { ScrollManager } from "@/components/ScrollManager";
import { framerMotionConfig } from "@/lib/config";
import { MotionConfig } from "framer-motion";

type Props = {};

const page = (props: Props) => {
  // await delay(5000);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <div className="h-screen w-full">
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [-1, 0.6, 5], fov: 43 }}>
          <color attach="background" args={["#ececec"]} />
          {/* <color attach="background" args={["#000000"]} /> */}
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              {/* <Experience menuOpened={menuOpened} /> */}
              <Experience section={section} isFormSubmitted={isFormSubmitted} />
            </Scroll>
            <Scroll html>
              <Interface onFormSubmit={setIsFormSubmitted} />
            </Scroll>
          </ScrollControls>
        </Canvas>

        {/* fix: the hydration error if it appers */}
        {/* todo: create a new page and place this OSguide avatar there instead as a solution */}
        {/* <>
          <Loader />
          <Leva />
          <UI hidden />
          <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
            <ExperienceOSGuide />
          </Canvas>
        </> */}
        {/* <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor /> */}

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
      </MotionConfig>
    </div>
  );
};

export default page;
