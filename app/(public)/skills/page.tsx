"use client";

import React from "react";
import { useRive } from "@rive-app/react-canvas";

// import RiveObj from "@/public/assets/search_illustratio.riv";

type Props = {};

// component name changed into Page instead of page

const Page = (props: Props) => {
  const { rive, RiveComponent } = useRive({
    src: "/assets/riveObj/search_illustratio.riv",
    stateMachines: "State Machine 1",
    artboard: "New Artboard",
    autoplay: true,
    onLoadError: () => console.log("error"),
    onLoad: () => console.log("loading"),
  });
  return (
    <div className="h-screen  ">
      <p className="text-center text-white ">hello</p>
      <RiveComponent
        className="z-100 w-full h-full relative"
        // onMouseEnter={() => rive && rive.play()}
        // onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  );
};

export default Page;
