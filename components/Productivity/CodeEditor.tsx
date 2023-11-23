"use client";
// change the code later to be server component
import React from "react";
import CodeBlock from "./CodeBlock";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import SVGIMG from "../../public/img/bluangel_webbplatsen.svg";

import { HTMLAttributes } from "react";
import { MotionProps } from "framer-motion";

type Props = {};

type AnimatedDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  ...motionProps
}) => <div {...motionProps}>{children}</div>;

const CodeEditor = (props: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 3 },
    show: { opacity: 1, y: 0, transition: { type: "keyframe" } },
  };
  const contentArray = [
    <AnimatedDiv
      key={1}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", delay: 0.1 }}
      className="tab rounded-xl border-[0.5px] border-[#30363d] overflow-hidden relative shadow-2xl bg-[#161b22]"
    >
      <div className="flex items-center justify-between border-b-[0.5px] border-[#30363d] p-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-[#0d1117] border-[0.5px] border-[#30363d] w-auto">
          <svg
            aria-hidden="true"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-lock color-fg-subtle flex-shrink-0 text-[#7d8590]"
          >
            <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
          </svg>
          <div className="sm:px-24 min-[]: px-16 px-2 text-white whitespace-nowrap overflow-hidden text-[14px] text-ellipsis">
            OrangePizza.se
          </div>
          <svg
            aria-hidden="true"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-sync color-fg-subtle flex-shrink-0 text-[#7d8590]"
          >
            <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
          </svg>
        </div>
        <div className="pre-next  flex text-[#7d8590] font-medium">
          <svg
            aria-hidden="true"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            className="octicon octicon-chevron-left color-fg-muted"
          >
            <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
          </svg>
          <svg
            aria-hidden="true"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            className="octicon octicon-chevron-right color-fg-muted"
          >
            <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex items-stretch">
        <div className=" border-l-[0.5px] border-[#30363d] w-full">
          <div className="flex items-center justify-between h-full bg-[#040d21]">
            <Image
              className="w-full h-auto md:block"
              width="1000"
              height="500"
              loading="lazy"
              decoding="async"
              alt="Planet earth with visualization of GitHub activity crossing the globe"
              src={require("../../public/img/project-img1.png")}
            />
          </div>
        </div>
      </div>
    </AnimatedDiv>,
    <AnimatedDiv
      key={2}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", delay: 0.1 }}
      className="tab rounded-xl border-[0.5px] border-[#30363d] overflow-hidden relative shadow-2xl bg-[#161b22]"
    >
      <div className="flex items-center justify-between border-b-[0.5px] border-[#30363d] p-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-[#0d1117] border-[0.5px] border-[#30363d] w-auto">
          <svg
            aria-hidden="true"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-lock color-fg-subtle flex-shrink-0 text-[#7d8590]"
          >
            <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
          </svg>
          <div className="sm:px-24 min-[]: px-16 px-2 text-white whitespace-nowrap overflow-hidden text-[14px] text-ellipsis">
            BlueAngel.se
          </div>
          <svg
            aria-hidden="true"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-sync color-fg-subtle flex-shrink-0 text-[#7d8590]"
          >
            <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
          </svg>
        </div>
        <div className="pre-next  flex text-[#7d8590] font-medium">
          <svg
            aria-hidden="true"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            className="octicon octicon-chevron-left color-fg-muted"
          >
            <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
          </svg>
          <svg
            aria-hidden="true"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            className="octicon octicon-chevron-right color-fg-muted"
          >
            <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex items-stretch">
        <div className=" border-l-[0.5px] border-[#30363d] w-full">
          <div className="flex items-center justify-between h-full bg-[#040d21]">
            <Image
              className="w-full h-auto md:block"
              width="1000"
              height="500"
              loading="lazy"
              decoding="async"
              alt="Planet earth with visualization of GitHub activity crossing the globe"
              src={SVGIMG}
            />
          </div>
        </div>
      </div>
    </AnimatedDiv>,
    <AnimatedDiv
      key={3}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", delay: 0.1 }}
      className="tab rounded-xl border-[0.5px] border-[#30363d] overflow-hidden relative shadow-2xl bg-[#161b22]"
    >
      <div className="flex items-center justify-between border-b-[0.5px] border-[#30363d] p-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between px-2 py-1 rounded-md bg-[#0d1117] border-[0.5px] border-[#30363d] w-auto">
          <svg
            aria-hidden="true"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-lock color-fg-subtle flex-shrink-0 text-[#7d8590]"
          >
            <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
          </svg>
          <div className="sm:px-24 min-[]: px-16 px-2 text-white whitespace-nowrap overflow-hidden text-[14px] text-ellipsis">
            CVmastery.com
          </div>
          <svg
            aria-hidden="true"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-sync color-fg-subtle flex-shrink-0 text-[#7d8590]"
          >
            <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
          </svg>
        </div>
        <div className="pre-next  flex text-[#7d8590] font-medium">
          <svg
            aria-hidden="true"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            className="octicon octicon-chevron-left color-fg-muted"
          >
            <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
          </svg>
          <svg
            aria-hidden="true"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            className="octicon octicon-chevron-right color-fg-muted"
          >
            <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex items-stretch">
        <div className=" border-l-[0.5px] border-[#30363d] w-full">
          <div className="flex items-center justify-between h-full bg-[#040d21]">
            <Image
              className="w-full h-auto md:block"
              width="1000"
              height="500"
              loading="lazy"
              decoding="async"
              alt="Planet earth with visualization of GitHub activity crossing the globe"
              src={require("../../public/img/project-img1.png")}
            />
          </div>
        </div>
      </div>
    </AnimatedDiv>,
  ];

  const [contentIndex, setContentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [contentArray]);
  return (
    <div className="editor-container">
      <motion.div
        key={contentIndex} // Add a unique key to each content div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ type: "tween", delay: 0.1 }}
        className="tab rounded-xl border-[0.5px] border-[#30363d] overflow-hidden relative shadow-2xl bg-[#161b22]"
      >
        {contentArray[contentIndex]}
      </motion.div>
    </div>
  );
};

export default CodeEditor;
