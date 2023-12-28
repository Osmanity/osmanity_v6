"use client";
import { Oval } from "react-loader-spinner";
// import { delay } from "@/lib/delay";

import Image from "next/image";
import Link from "next/link";
import OsmanityLogo from "../../../public/img/OsmanityLogo.svg";

export default function Loading() {
  // await delay(5000);
  return (
    <main className="flex flex-1 items-center justify-center text-7xl text-center bg-black w-full h-full absolute top-0 left-0 z-100">
      {/* <h1 className="text-white text-7xl">Loading about page...</h1>
      <p className="text-7xl">We are fetchin your content</p> */}
      <div className="flex flex-col items-center justify-center">
        <Link href={"/"} className="opacity-100 hover:opacity-70">
          <Image
            src={OsmanityLogo}
            alt="OsmanityLogo"
            width={50}
            height={50}
            className=" h-16 w-24 p-1 lg:p-0 pb-2 sm:pb-0 hidden sm:block"
          />
        </Link>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#ffffff"
          secondaryColor="#858484"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </main>
  );
}
