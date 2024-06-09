"use client";
import { Oval } from "react-loader-spinner";
// import { delay } from "@/lib/delay";

import Image from "next/image";
import OsmanityLogo from "../../../public/img/OsmanityLogo.svg";

export default function Loading() {
  // await delay(5000);
  return (
    <div className="flex flex-1 items-center justify-center text-7xl text-center dark:bg-black dark:text-white bg-[#F3F5F8] text-black w-full h-full absolute top-0 left-0 z-100">
      <div className="flex flex-col items-center justify-center relative">
        <Image
          src={OsmanityLogo}
          alt="OsmanityLogo"
          width={50}
          height={50}
          className="absolute top-0 h-16 w-24  mt-2 mr-1"
        />
        <Oval
          visible={true}
          height="81"
          width="81"
          color="#ffffff"
          secondaryColor="#858484"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      <div className="flex flex-col justify-start items-start ">
        <p className="ml-3 text-xl text-center font-mono ">HomePage Is</p>
        <p className="ml-3 text-xl text-center font-mono  flex animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
