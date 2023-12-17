"use client";

import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";
import { useRive } from "@rive-app/react-canvas";

type Props = {};

export default function NotFound({}: Props) {
  const { rive, RiveComponent } = useRive({
    src: "/assets/riveObj/search_illustratio.riv",
    stateMachines: "State Machine 1",
    artboard: "New Artboard",
    autoplay: true,
    onLoadError: () => console.log("error"),
    onLoad: () => console.log("loading"),
  });
  return (
    <div className="  min-h-screen relative bg-black text-white ">
      <div className="z-50 sticky top-0 pb-12 sm:pb-0">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <main className="text-center h-screen flex flex-col justify-center  relative">
        <div className="relative h-96">
          <div className="z-100 h-full">
            <h2 className="text-3xl sm:text-6xl pb-4">There was a problem </h2>
            <p className=" text-lg sm:text-xl pb-1">
              We could not find the page you were looking for.
            </p>
            <p className="">
              Go back to the{" "}
              <Link className="cursor-pointer underline" href="/">
                Home page
              </Link>
            </p>
            <RiveComponent
              className="z-10 w-full h-40 sm:h-60 relative "
              // onMouseEnter={() => rive && rive.play()}
              // onMouseLeave={() => rive && rive.pause()}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
