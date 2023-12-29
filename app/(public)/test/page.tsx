"use client";
import { Oval } from "react-loader-spinner";
// import { delay } from "@/lib/delay";

import Image from "next/image";
import OsmanityLogo from "../../../public/img/OsmanityLogo.svg";

function page() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
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
    </div>
  );
}

export default page;
