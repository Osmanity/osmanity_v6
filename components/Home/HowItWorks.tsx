import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BiHardHat, BiPaintRoll } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlinePalette } from "react-icons/md";

interface HowItWorksProps {
  className?: string;
}

const howItWorksContent = {
  heading: {
    title: "Designing Tailored Digital Solutions, Step by Step",
    subTitle: "How It Works",
    description:
      "At Osmanity, we're dedicated to crafting seamless digital journeys that resonate with your audience. From idea to execution, we blend creativity with functionality, ensuring every step reflects your vision and goals. Exceptional user experiences are guaranteed every step of the way.",
  },
  steps: [
    {
      number: "01",
      icon: FiPhoneCall,
      title: "Project Meeting",
      description:
        "At Osmanity, our first step is a detailed project meeting where we engage with you to understand your vision and requirements. This collaborative session sets the foundation for building a website that aligns perfectly with your goals.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      number: "02",
      icon: BiPaintRoll,
      title: "Conceptual Design",
      description:
        "Following our project meeting, we dive into the conceptual design phase. At Osmanity, we believe in creating visually stunning and user-friendly designs that bring your vision to life on the digital canvas. Our goal is to provide you with a blueprint that captures the essence of your brand.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      number: "03",
      icon: BiHardHat,
      title: "Web Development",
      description:
        "With the conceptual design approved, we transition to the web development phase. At Osmanity, we're passionate about turning ideas into reality. Our skilled team brings the design to life, ensuring a seamless, functional, and captivating website that not only meets but exceeds your expectations.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
  ],

  features: [
    {
      icon: MdOutlinePalette,
      title: "Graphic Design Package",
      description:
        "Transform your brand with stunning graphic designs tailored to your unique identity. Our experts will bring your vision to life, ensuring your brand stands out in a crowded marketplace.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: FaShoppingBasket,
      title: "Ecommerce Store Package",
      description:
        "Take your business online with our comprehensive ecommerce store package. From user-friendly interfaces to secure payment gateways, we provide everything you need to succeed in the digital marketplace.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: FaPeopleRobbery,
      title: "Advertising & Marketing Package",
      description:
        "Reach your target audience effectively with our strategic advertising and marketing package. From social media campaigns to SEO optimization, we'll help you maximize your brand's visibility and impact.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: LuPackageOpen,
      title: "Custom Package",
      description:
        "Tailor your experience with our Custom Package. Whether you need a unique branding solution or specialized design services, we'll work closely with you to fulfill your specific requirements.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
  ],
};

const HowItWorks: React.FC<HowItWorksProps> = ({ className }) => {
  return (
    <>
      <section className={`${className}`}>
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center mb-20 lg:mb-36">
            <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
              <div className="lg:w-7/12 mb-5 lg:mb-0">
                {howItWorksContent.heading.subTitle && (
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
                    className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500 dark:text-white/80"
                  >
                    {howItWorksContent.heading.subTitle}
                  </motion.span>
                )}

                {howItWorksContent.heading.title && (
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
                    className="text-2xl lg:text-4xl"
                  >
                    {howItWorksContent.heading.title}
                  </motion.h2>
                )}
              </div>

              <div className="lg:w-8/12 self-end lg:pl-4">
                {howItWorksContent.heading.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.6,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className="text-gray-500 dark:text-white/70 "
                  >
                    {howItWorksContent.heading.description}
                    <br />
                    <span className="font-bold text-black/60 dark:text-white">
                      Let's get started on your next project today!
                    </span>
                  </motion.p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 w-full 2xl:w-10/12  mx-auto">
            {howItWorksContent.steps.map((step, idx) => {
              idx *= 0.2;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.1 }, // Ensure transition is an object
                  }}
                  className="group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white dark:bg-black  dark:border-1 border border-white/30 shadow-sm dark:shadow-none dark:shadow-white relative overflow-hidden hover:bg-violet-800 dark:hover:bg-violet-800 hover:shadow-2xl hover:text-white"
                >
                  <span className="text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5  left-0 leading-0 ">
                    {step.number}
                  </span>
                  <div className="absolute top-10 right-10">
                    <span className="text-3xl text-violet-600 duration-300 transition-all ease-in-out group-hover:text-white">
                      <step.icon />
                    </span>
                  </div>
                  <div className="relative z-40 flex gap-3 items-start">
                    <div className="font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-50">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-[18px] mb-4 duration-300 transition-all ease-in-out group-hover:text-white">
                        {step.title}
                      </h3>
                      <div className="h-40 lg:h-80 xl:h-64">
                        <p className="leading-relaxed text-[15px] text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white">
                          {step.description}
                        </p>
                      </div>
                      <p>
                        <Link
                          href={step.btn.href}
                          className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-violet-600 duration-300 transition-all ease-in-out group-hover:border-white group-hover:text-white"
                        >
                          {step.btn.label}
                        </Link>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-72 lg:pt-60 pb-32 bg-violet-600">
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center">
            <div className="w-full lg:w-8/12 flex gap-0 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {howItWorksContent.features.map((feature, idx) => {
                  idx *= 0.2;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: idx,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      key={feature.title}
                      className="relative z-40 flex gap-3 items-start"
                    >
                      <div>
                        <span className="text-3xl text-white">
                          <feature.icon />
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg mb-4 text-white">
                          {feature.title}
                        </h3>
                        <p className="leading-relaxed text-[15px] text-white text-opacity-75 mb-7">
                          {feature.description}
                        </p>
                        <p>
                          <Link
                            href={feature.btn.href}
                            className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block text-white border-white border-opacity-25 transition-all duration-300 ease-in-out hover:border-opacity-100"
                          >
                            {feature.btn.label}
                          </Link>
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
