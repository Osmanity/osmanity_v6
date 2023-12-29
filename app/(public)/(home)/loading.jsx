"use client";
import { Oval } from "react-loader-spinner";
// import { delay } from "@/lib/delay";

import Image from "next/image";
import OsmanityLogo from "../../../public/img/OsmanityLogo.svg";

export default function Loading() {
  // await delay(5000);
  return (
    <main className="flex flex-1 items-center justify-center text-7xl text-center bg-black w-full h-full absolute top-0 left-0 z-100">
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
      <p className="ml-3 text-xl text-center text-white">Loading...</p>
    </main>
  );
}
