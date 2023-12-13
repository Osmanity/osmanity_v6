"use client";
import Spline from "@splinetool/react-spline";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="relative flex flex-1 min-h-screen flex-col md:flex-row text-white  rounded-lg mx-auto overflow-hidden">
      <Spline
        className="-z-5 flex flex-1 items-center justify-center mx-auto xl:ml-60 ml-0 xl:pl-8 xl:pt-20  "
        scene="https://prod.spline.design/xA8SzcwXhLCwEnyC/scene.splinecode"
        // scene="https://prod.spline.design/F7CRsi9q83SRIUKd/scene.splinecode"
      />

      {/* <div className="flex md:w-1/2  flex-1 sm:h-auto">
        <Spline scene="https://prod.spline.design/QkyHiI9q0Hg8U6ck/scene.splinecode" />
      </div> */}

      <div className=" absolute z-5 flex flex-1 flex-col  w-full items-start justify-center bg-gradient-to-l from-black/70 from-30% via-black/50 via-100% sm:via-80% p-10 h-full">
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
      </div>
    </div>
  );
};

export default page;
