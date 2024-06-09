"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import HeroSlide from "./HeroSlide";

interface HeroProps {
  className?: string;
}

const heroContent = {
  intro: {
    title: "Where Creativity Meets Technical Mastery",
    subTitle: "Welcome To",
    description:
      "At Osmanity, we bring together creative vision and technical mastery to redefine web development. Our mission is to craft digital experiences that seamlessly blend innovative design with flawless execution, setting new benchmarks in the industry.",
    btn: {
      href: "/projects",
      label: "View Projects",
    },
  },
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between ">
          <div className="lg:w-4/12 z-[3] relative">
            {heroContent.intro.subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500 dark:text-white/80 dark:bg-black/70 pl-4 "
              >
                {heroContent.intro.subTitle}
              </motion.span>
            )}

            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-gray-800 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8  p-4 dark:rounded-xl drop-shadow-lg "
              >
                <div className="relative">
                  {heroContent.intro.title}
                  <span className="absolute hidden dark:flex top-0.5 left-0.5 -z-[1] drop-shadow-lg  text-black">
                    {heroContent.intro.title}
                  </span>
                </div>
              </motion.h1>
            )}

            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className=" leading-relaxed text-gray-500 dark:text-white/90 w-auto lg:w-screen max-w-lg  text-base lg:text-lg mb-10 lg:mb-16 p-4 dark:rounded-xl"
              >
                <div className="relative">
                  {heroContent.intro.description}
                  <span className="absolute hidden dark:flex top-0.5 left-0.5 -z-[1] drop-shadow-lg  text-black">
                    {heroContent.intro.description}
                  </span>
                </div>
              </motion.p>
            )}

            {heroContent.intro.btn.label && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={heroContent.intro.btn.href}
                  className="transition-all duration-300 ease-in-out ml-4 text-[11.5px] tracking-[2px] font-bold uppercase bg-violet-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-violet-600 hover:shadow-2xl"
                >
                  {heroContent.intro.btn.label}
                </Link>
              </motion.p>
            )}
          </div>

          <div className="lg:w-9/12 relative ">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll1 }}
              className="z-[2] relative bg-cover bg-center "
            >
              {/* <Image
                src="/img/hero-img-1-min.jpg"
                width={828}
                height={985}
                alt="Hero image"
              /> */}
              {/* Todo - add hero image slider animation using embla carousel */}
              {/* <div className="absolute bottom-0 sm:bottom-auto sm:top-0 right-0 z-10 flex justify-end -mb-4 -mr-2 sm:-mb-0 sm:-mt-4 sm:-mr-10">
                <p className="px-4 bg-black text-white rounded-full border-2  border-white shadow-md  dark:border-black dark:bg-white dark:text-black text-sm sm:text-lg">
                  Web-development
                </p>
              </div> */}
              {/* <Image
                src="/img/bluangel_webbplatsen.png"
                width={1000}
                height={500}
                // width={1920}
                // height={1080}
                alt="Hero image"
                className="border-2  border-white shadow-md  dark:border-black mt-10 sm:mt-0 mb-24"
              /> */}
              <HeroSlide />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll2 }}
              className="absolute botto-0 lg:bottom-[200px] -left-[100px] z-[1]"
            >
              <Image
                src="/img/dots.svg"
                width={200}
                height={200}
                alt="Dots background image"
                className="w-64"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
