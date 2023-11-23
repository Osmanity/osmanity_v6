"use client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

import { TypeAnimation } from "react-type-animation";

import { HeroH1 } from "./HeroElement";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  //   const [hovered, setHovered] = useState<boolean>(false);
  const [hovered1, setHovered1] = useState<boolean>(false);
  return (
    <div className="relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16 ">
      {/* <img
        className="absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0"
        width="500"
        height="326"
        src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
        alt=""
      /> */}
      <div className="absolute hidden sm:flex hero-drone top-10 sm:top-20 w-auto h-auto right-0 xl:right-0 ">
        <div className="relative">
          <div className="bg-black/50 lg:bg-transparent flex h-full w-full absolute z-50" />
          {/* <Spline scene="https://prod.spline.design/9hflHH51haomJYpy/scene.splinecode" /> */}
        </div>
      </div>
      <div className="absolute flex flex-1 sm:hidden hero-drone w-[300px] h-[800px] top-20 mx-auto  left-0 right-0 ">
        <div className="relative">
          <div className="bg-black/50 lg:bg-transparent flex h-full w-full absolute z-50" />
          {/* <Spline scene="https://prod.spline.design/an1hkMD6iaf13YCO/scene.splinecode" /> */}
        </div>
      </div>
      <div className="flex">
        <div className="relative ">
          <img
            aria-hidden="true"
            className="  md:flex md:pt-0"
            src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
            width="437"
            height="637"
            alt=""
          />
          {/* <div className="mt-[652px] md:hidden" /> */}

          <div className="mx-auto my-3 ">
            <span className="relative z-[11]">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                version="1.1"
                width="24"
                data-view-component="true"
                className=" text-white"
              >
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
              <span
                className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow "
                style={{
                  backgroundColor: "var(--mktg-accent-primary)",
                  filter: "blur(17px)",
                }}
              ></span>
            </span>
          </div>
          <div
            style={{
              background:
                "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
              marginLeft: "11px",
            }}
            className=" max-md:w-[2px] w-[3px] h-[450px]  max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md "
          ></div>
        </div>
        <div className=" absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">
          <div className="h-20 sm:h-auto">
            <h1 className="relative text-center sm:text-left min-[420px]:text-[7vw] text-[8vw] lg:text-7xl  max-sm:leading-[30px] max-md:leading-[80px]  font-semibold text-white">
              {" "}
              Service We Provide:
            </h1>
            <HeroH1>
              {/* {`Service We Provide: `} */}

              <TypeAnimation
                sequence={[
                  // "- elibom Development", // Types 'One'
                  // 3000, // Waits 1s
                  "- Web Development", // Types 'One'
                  3000, // Waits 1s
                  "- Mobile Development", // Types 'One'
                  3000, // Waits 1s

                  "- AI Development",
                  3000,
                  "- E-commerce",
                  3000, // Waits 2s
                  "- Advertisment",
                  3000,
                  "- Education", // Types 'Four' without deleting 'Two'
                  3000,

                  // () => {
                  //   console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  // },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                // style={{
                //   textAlign: "center",
                //   fontStyle: "italic",
                //   color: "white",
                //   fontSize: "6vw", // Use viewport width as a relative unit
                //   fontWeight: "700",
                //   letterSpacing: "0.8px",
                //   lineHeight: "1",
                //   maxWidth: "800px", // Set a maximum width for the text
                //   paddingTop: "10px",
                //   paddingBottom: "20px",
                // }}
                className="text-center sm:text-left italic text-white text-[7vw] min-[420px]:text-[6vw] lg:text-[60px]  font-bold tracking-wide leading-6  pt-3 pb-2 sm:pt-0 lg:pt-4 sm:pb-5"
              />
            </HeroH1>
          </div>
          {/* 
          todo - build a transparent background for the text
          <div
          className="p-5 xl:hidden"
          >

          </div> */}
          <p className="relative z-1 text-[5vw] min-[420px]:text-[4vw]  lg:text-[30px] text-center sm:text-left leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[40px] mb-5 md:mb-12 md:10/12  lg:w-8/12 text-white/50  mt-2">
            Our vision is to bring innovative and effective solutions to
            real-world problems and make it a reality. Our ultimate goal is to
            create problem-solving software that not only streamlines processes
            but also makes a positive impact on people&apos;s lives.
          </p>
          <div className="flex lg:w-11/12 md:space-x-5 max-md:flex-col">
            <form action="">
              <div className=" grid max-md:grid-rows-2 md:grid-cols-2">
                <dl>
                  <dd>
                    <input
                      className="h-12 focus:outline-none max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-[16px] pl-3"
                      placeholder="Email address"
                      type="email"
                      name="user_email"
                      id="user_email"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </dd>
                </dl>
                <button
                  type="button"
                  className="mb-10 md:mb-0 py-3 w-full home-campaign-signup-button text-[16px] max-md:rounded-md md:rounded-e-md text-white font-semibold"
                >
                  Sign up for Osmanity
                </button>
              </div>
            </form>
            <span className="border-t-[1px] md:border-l-[1px] border-neutral-700 md:mx-10 mb-3 md:mb-0"></span>
            <a
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
              href=""
              className="flex items-center w-full md:w-auto justify-center text-[16px] py-3 px-5 max-md:mt-4 rounded-md border-[#ae88f9] border-[1.5px] text-white"
            >
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` arrow-symbol-mktg text-white ml-3 transition ease-in duration-150 ${
                  hovered1 ? "translate-x-0 " : "-translate-x-1"
                }`}
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                ></path>
                <path
                  className={` text-white transition ease-in duration-150 ${
                    hovered1 ? " opacity-100" : "opacity-0 "
                  }`}
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </a>
          </div>
          <div className="md:my-14 sm:my-12 my-12 ">
            <p className="text-[16px] leading-[24px] text-[#7d8590]">
              Trusted by&nbsp;↘︎
            </p>
            <div className="flex flex-wrap justify-center sm:justify-center items-center">
              <Image
                src={require("../../public/img/blackroseLogo.svg")}
                alt="Stripe logo"
                height="140"
                className="my-3 scale-90 h-140 w-140"
              />
              <Image
                src={require("../../public/img/BlueAngel.svg")}
                alt="Stripe logo"
                height="100"
                className="my-3 scale-90 h-100 w-100"
              />
              <Image
                src={require("../../public/img/CVMasterna.svg")}
                alt="Stripe logo"
                height="100"
                className="my-3 scale-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
