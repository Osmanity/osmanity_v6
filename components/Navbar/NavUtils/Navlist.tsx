"use client";
import { useState } from "react";

type Props = {
  main: string;
  submain: string;
  path: string;
  path2: string;
  path3?: string;
  path4?: string;
  href: string;
  viewBoxValue?: string;
};

const Navlist = ({
  main,
  submain,
  path,
  path2,
  path3,
  path4,
  href,
  viewBoxValue,
}: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const viewBox = viewBoxValue || "0 0 24 24";
  return (
    <a
      href={href}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className="py-3 flex items-center space-x-3 cursor-pointer"
    >
      <svg
        aria-hidden="true"
        height="26"
        viewBox={viewBox}
        fill="currentColor"
        version="1.1"
        width="26"
        data-view-component="true"
        className={` mr-3 transition ease-in duration-100  ${
          focus ? "text-[#7d40a9]" : "text-neutral-500"
        }`}
      >
        <path d={path}></path>
        <path d={path2}></path>
        <path d={path3}></path>
        <path d={path4}></path>
      </svg>

      <div
        className={`${
          focus ? "text-[#7d40a9]" : "text-neutral-500"
        } transition ease-in duration-100   text-[12px] sm:text-[14px]`}
      >
        <div
          className={`font-semibold transition ease-in duration-100 text-[12px] sm:text-[16px]   ${
            focus ? "text-[#7d40a9]" : "text-neutral-800"
          }   leading-5`}
        >
          {main}
        </div>
        <div className="hidden sm:flex">{submain}</div>
      </div>
    </a>
  );
};

export default Navlist;
