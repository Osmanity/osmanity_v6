"use client";
import Spline from "@splinetool/react-spline";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

interface HeroProps {
  className?: string;
}

// "I am Ibrahim Osman, a full-stack developer at Osmanity, where I blend innovative design with technical proficiency to create cutting-edge websites and mobile apps. My passion lies in crafting digital solutions that not only meet the industry's highest standards but also cater uniquely to our clients' needs.",
// "Welcome to Ibrahim Osman's world at Osmanity, where digital dreams are turned into reality. My role as a full-stack developer is to navigate the frontier of technology, creating web and mobile applications that are not just functional but are gateways to new digital experiences.",
const CTAContent = {
  intro: {
    title: "Innovating at the Intersection of Art and Technology",
    subTitle: "Meet Ibrahim Osman",
    description:
      "Explore Osmanity with Ibrahim Osman, where your digital dreams become reality. As a full-stack developer, I craft ideas into unique web and mobile applications that offer unique digital experiences,",
    btn: {
      href: "/about",
      label: "Learn More",
    },
  },
};

const CTA: React.FC<HeroProps> = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container relative px-4 mx-auto mt-36 mb-24">
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between ">
          <div className="lg:w-4/12 z-[3] relative">
            {CTAContent.intro.subTitle && (
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
                {CTAContent.intro.subTitle}
              </motion.span>
            )}

            {CTAContent.intro.title && (
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
                  {CTAContent.intro.title}
                  <span className="absolute hidden dark:flex top-0.5 left-0.5 -z-[1] drop-shadow-lg  text-black">
                    {CTAContent.intro.title}
                  </span>
                </div>
              </motion.h1>
            )}

            {CTAContent.intro.description && (
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
                  {CTAContent.intro.description}
                  <span className="absolute hidden dark:flex top-0.5 left-0.5 -z-[1] drop-shadow-lg  text-black">
                    {CTAContent.intro.description}
                  </span>{" "}
                  blending
                  <br />
                  <span className="font-bold">
                    functionality with innovation.
                  </span>
                </div>
              </motion.p>
            )}

            {CTAContent.intro.btn.label && (
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
                  href={CTAContent.intro.btn.href}
                  className="transition-all duration-300 ease-in-out ml-4 text-[11.5px] tracking-[2px] font-bold uppercase bg-violet-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-violet-600 hover:shadow-2xl"
                >
                  {CTAContent.intro.btn.label}
                </Link>
              </motion.p>
            )}
          </div>

          <div className="lg:w-9/12  ">
            <Spline
              className="absolute md:flex hidden left-[230px] xl:left-[340px] top-0  z-2 "
              scene="https://prod.spline.design/8kDAQsFnnWSq8kZx/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
