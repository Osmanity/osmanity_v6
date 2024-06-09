"use client";

import HomeHero from "@/components/Home/about";
import CTA from "@/components/Home/CTA";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import RecentBlog from "@/components/Home/RecentBlog";
// import SliderOne from "@/components/Home/slider";
import SliderTwo from "@/components/Home/SliderTwo";
import Subscribe from "@/components/Home/Subscribe";
import Testimonial from "@/components/Home/Testimonial";
import WebProjects from "@/components/Home/WebProjects";
import { delay } from "@/lib/delay";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Link from "next/link";

export default async function Home() {
  delay(10000);
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* <Heading className="pt-32 pb-0 lg:pb-10" /> */}
      <Hero className="pt-12 pb-0 lg:pb-10" />
      <HomeHero className="py-16 lg:py-32 overflow-hidden" />

      {/* <div className="w-full my-24  bg-violet-600 py-14 text-black">
        <SliderOne />
      </div> */}

      {/* <div className="w-full my-24  bg-violet-600 py-14 text-black">
        <SliderOne />
      </div> */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="sm:mx-32 relative overflow-hidden shadow-md shadow-black "
      >
        {/* SVG Grid Background */}
        {/* <svg
          className="absolute inset-0 z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#000"
            fillOpacity="0.1"
            d="M0,256L30,224C60,192,120,128,180,138.7C240,149,300,235,360,240C420,245,480,171,540,128C600,85,660,75,720,85.3C780,96,840,128,900,160C960,192,1020,224,1080,224C1140,224,1200,192,1260,186.7C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg> */}

        {/* Content */}
        <div className="w-full  bg-violet-950  text-white dark:bg-violet-600/20 border-violet-900 p-4 mx-auto border relative z-10">
          <svg
            className="grid-glow-hero stroke-current text-white absolute top-0 left-0"
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
              <rect strokeWidth="0.1" width="100%" height="100%" />
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
          <div className="text-3xl sm:text-4xl md:text-5xl  mb-4 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className=" uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-white/80"
            >
              Projects Showcase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl mb-10"
            >
              Webb Development
            </motion.h2>
          </div>

          <SliderTwo />
          <div className="flex justify-center items-center mt-6 mb-2 ">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <Link
                href="/projects"
                className="transition-all duration-300 ease-in-out  text-[11.5px] tracking-[2px] font-bold uppercase bg-white-600 py-4 px-5 bg-white hover:text-white inline-block border border-violet-600 hover:border-white hover:bg-violet-600 text-violet-600 hover:shadow-2xl"
              >
                See More Projects
              </Link>
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* <EmblaCarousel /> */}
      {/* <Image
        // priority
        src="/img/bluangel_webbplatsen.png"
        alt="logo"
        width={1000}
        height={1000}
        className="rounded-2xl cursor-pointer hover:opacity-70"
      /> */}
      <CTA />
      <div className="relative h-[600px] -mt-28 sm:h-[800px] overflow-hidden md:hidden flex ">
        <Spline
          className="absolute  left-0 top-0  z-2 "
          scene="https://prod.spline.design/8kDAQsFnnWSq8kZx/scene.splinecode"
        />
      </div>
      <WebProjects />
      <HowItWorks className="py-16 !pt-32 lg:py-32" />
      <Testimonial className="py-16 lg:py-32" />
      <RecentBlog className="pt-14 pb-15 lg:pb-32" />
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32 bg-violet-600" />
    </div>
  );
}
