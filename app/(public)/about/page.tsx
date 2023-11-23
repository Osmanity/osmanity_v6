"use client";
import Spline from "@splinetool/react-spline";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row text-white p-6 rounded-lg  h-full mx-auto ">
      <div className="md:w-1/2 flex flex-1 h-60 sm:h-auto">
        <Spline scene="https://prod.spline.design/QkyHiI9q0Hg8U6ck/scene.splinecode" />
      </div>
      <div className="md:w-1/2 md:ml-6 flex flex-1 flex-col items-start justify-center sm:p-10">
        <h2 className="sm:text-5xl text-2xl font-semibold">
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

        <p className="text-white/50 mt-4 max-w-lg">
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
