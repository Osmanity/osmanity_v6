"use client";

import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  // const { userId } = auth();

  const bubblesContainerRef = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const between = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    let colors: string[] = [];

    if (resolvedTheme) {
      colors = ["bg-white", "bg-white/60"];
    } else {
      colors = ["bg-black", "bg-black/60"];
    }

    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      if (bubblesContainerRef.current) {
        bubblesContainerRef.current.appendChild(bubble);
      }

      bubble.style.left = `${between(0, 100)}%`;
      const sizePx = `${between(4, 8)}px`;

      bubble.style.width = sizePx;
      bubble.style.height = sizePx;
      bubble.classList.add(colors[Math.floor(Math.random() * colors.length)]);
      bubble.style.opacity = `${between(20, 100)}%`;

      const floatingBubbleKeyFrames = [{ top: "100%" }, { top: `-${sizePx}` }];

      const floatingAnimation = bubble.animate(floatingBubbleKeyFrames, {
        duration: between(10000, 40000),
        fill: "forwards",
      });

      floatingAnimation.onfinish = () => {
        if (bubblesContainerRef.current && bubble) {
          bubblesContainerRef.current.removeChild(bubble);
        }
      };
    };

    const intervalId = setInterval(createBubble, 100);

    return () => clearInterval(intervalId);
  }, [resolvedTheme]);

  return (
    <div className="dark:text-white text-black min-h-screen relative  dark:bg-[#050016] bg-white ">
      <div className="z-50 sticky top-0">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div className="overflow-hidden  min-h-screen relative ">
        <div className="absolute w-full h-full top-0 left-0 z-[5]">
          <div className="glow" />
          <svg
            className="grid-glow stroke-current text-black dark:text-white"
            // stroke={darkMode ? "white" : "black"}
            fill="transparent"
            viewBox="0 0 1600 480"
          >
            <pattern
              id="small-grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <rect stroke-width="0.1" width="100%" height="100%" />
            </pattern>

            <pattern
              id="big-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100%" height="100%" />
            </pattern>

            <rect width="100%" height="100%" fill="url(#big-grid)" />

            <rect width="100%" height="100%" fill="url(#small-grid)" />
          </svg>
        </div>
        <div id="bubbles" className="bg-white/20" ref={bubblesContainerRef} />
        <div className="lg:container lg:mx-auto lg:max-w-9xl px-8">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
