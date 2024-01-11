"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Section = (props: { children: any }) => {
  const { children } = props;

  return (
    <motion.section
      className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center
    `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const Interface = ({ onFormSubmit }: any) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default Interface;

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Ibrahim Osman</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I am a software engineer based in Stockholm, Sweden. I am passionate
        about
        <br />
        building software and I love to share my knowledge with others.
      </motion.p>
      <Link href="/OsChatbot">
        <motion.button
          className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          Talk To My Personal AI Assistant
        </motion.button>
      </Link>
      {/* <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button> */}
    </Section>
  );
};

const skills = [
  {
    title: "Nextjs 14",
    level: 90,
  },
  {
    title: "React / React Native",
    level: 80,
  },
  {
    title: "Expressjs / Nodejs",
    level: 65,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 50,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];
const languages = [
  {
    title: "🇸🇪 Swedish",
    level: 100,
  },

  {
    title: "🇺🇸 English",
    level: 80,
  },
  {
    title: "🇸🇴 Somali",
    level: 40,
  },

  {
    title: "🇯🇵 Japanese",
    level: 20,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = ({ onFormSubmit }: any) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onFormSubmit(true); // Notify that the form has been submitted
    setIsSubmitted(true); // Update the state to indicate submission
  };

  if (isSubmitted) {
    return (
      <Section>
        <div className="flex flex-col items-start justify-center w-full h-full">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-7xl"
          >
            Thank You!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl pl-2"
          >
            Your message has been sent successfully.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl pl-2"
          >
            Ibrahim@osmanity.com
          </motion.p>
        </div>
      </Section>
    );
  }
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>

      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />

          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />

          <label
            htmlFor="message"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>

          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
          >
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
