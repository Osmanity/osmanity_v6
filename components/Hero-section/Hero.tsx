"use client";
// import Spline from "@splinetool/react-spline";
// const Spline = dynamic(() => import("@splinetool/react-spline"), {
//   loading: () => <p>Loading...</p>,
// });
import { useState } from "react";

import { TypeAnimation } from "react-type-animation";

import { HeroH1 } from "./HeroElement";

// import dynamic from "next/dynamic";

// import OsmanityBlackhole from "@/public/videos/blackhole.webm";

const Hero = () => {
  //   const [hovered, setHovered] = useState<boolean>(false);
  const [hovered1, setHovered1] = useState<boolean>(false);

  return (
    <div className="relative py-40 min-h-[940px] sm:min-h-[1000px] max-w-[1280px]  lg:pt-32 md:px-10 mx-auto pt-16 z-30 ">
      {/* <img
        className="absolute right-0 w-1/4 h-auto hero-drone top-28 xl:right-0"
        width="500"
        height="326"
        src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
        alt=""
      /> */}
      <div className="absolute top-0 left-0 z-30 w-full min-h-[880px] sm:min-h-[1000px] bg-black/40 lg:bg-transparent " />
      {/* <div className="absolute right-0 z-20 hidden w-auto h-auto sm:flex hero-drone top-10 sm:top-20 xl:right-0 ">
        <div className="relative">
          <div className="absolute z-20 flex w-full h-full " />
          <Spline scene="https://prod.spline.design/9hflHH51haomJYpy/scene.splinecode" />
        </div>
      </div>
      <div className="absolute mt-14 z-20 flex flex-1 sm:hidden hero-drone w-[320px] h-[800px] top-5 mx-auto justify-center left-0  right-0">
        <div className="relative">
          <div className="absolute z-20 flex w-full h-full " />
          <Spline scene="https://prod.spline.design/MZGttUZFW6c-uT-W/scene.splinecode" />
        </div>
      </div> */}
      {/* <div className="absolute top-0 left-0 z-50 w-full min-h-[880px] sm:min-h-[1000px] bg-black/30 lg:bg-transparent " /> */}

      <div className="flex ">
        <div className="absolute z-50 pt-32  mt-20 max-md:px-4 ">
          <div className="h-20 sm:h-auto">
            <h1 className="relative text-center sm:text-left  text-6xl lg:text-7xl  max-sm:leading-[50px] max-md:leading-[80px]  font-semibold text-white">
              {" "}
              <span className="fancy-text">Service</span> We Provide:
            </h1>
            <HeroH1>
              {/* {`Service We Provide: `} */}

              <TypeAnimation
                sequence={[
                  // "- elibom Development", // Types 'One'
                  // 3000, // Waits 1s
                  "-💻Web Development", // Types 'One'
                  3000, // Waits 1s
                  "-🚀Mobile Development", // Types 'One'
                  3000, // Waits 1s

                  "-🤖AI Development",
                  3000,
                  "-🛍️E-commerce",
                  3000, // Waits 2s
                  "-🎯Advertisment",
                  3000,
                  "-🎓Education ", // Types 'Four' without deleting 'Two'
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
                className="text-center sm:text-left  text-white text-[6vw] min-[420px]:text-[6vw] lg:text-[60px]  font-bold tracking-wide leading-6  pt-3 pb-2 sm:pt-0 lg:pt-4 sm:pb-5"
              />
            </HeroH1>
          </div>
          {/* 
          todo - build a transparent background for the text
          <div
          className="p-5 xl:hidden"
          >

          </div> */}
          <p className=" relative z-50 text-[5vw] min-[420px]:text-[4vw]  lg:text-[30px] text-center sm:text-left leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[40px] mb-5 md:mb-12 md:10/12  lg:w-8/12 text-white/50  mt-20">
            Our vision is to bring innovative and effective solutions to
            real-world problems and make it a reality. Our ultimate goal is to
            create problem-solving software that not only streamlines processes
            but also makes a positive impact on people&apos;s lives.
          </p>
          <div className="flex lg:w-11/12 md:space-x-5 max-md:flex-col">
            <form action="">
              <div className="grid max-md:grid-rows-2 md:grid-cols-2 md:border-[1px] md:border-[#6e40c9] md:overflow-hidden md:rounded-md">
                <dl>
                  <dd>
                    <input
                      className="h-[60px] focus:outline-none max-md:rounded-md  right-0 w-full placeholder:text-[16px]  pl-3 dark:bg-white/50 dark:text-white dark:placeholder:text-white bg-black/20 "
                      placeholder="Email"
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
                  className="mb-10 md:mb-0 py-4 px-1 w-full home-campaign-signup-button font-bold text-[16px] max-md:rounded-md md:rounded-e-sm text-white "
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
              className="flex items-center w-full md:w-auto justify-center font-semibold text-[16px] py-4 px-5 max-md:mt-4 rounded-md border-[#6e40c9] border-[1.5px] text-white"
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
          {/* <div className="my-12 md:my-14 sm:my-12 ">
            <p className="text-[16px] leading-[24px] text-[#7d8590]">
              Trusted by&nbsp;↘︎
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-center">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
