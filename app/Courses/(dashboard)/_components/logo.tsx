"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import OsmanityLogo from "@/./public/img/OsmanityLogo.svg";
import OsmanityLogoW from "@/./public/img/OsmanityLogoW.svg";

export const Logo = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex justify-center items-center  ">
      {/* <Image
      height={130}
      width={130}
      alt="logo"
      src="/logo.svg"
    /> */}
      <Link href={"/"} className="opacity-100 hover:opacity-70">
        {resolvedTheme === "dark" ? (
          <Image
            src={OsmanityLogo}
            alt="OsmanityLogoBlack"
            width={25}
            height={25}
            className="h-12 w-16 p-1 lg:p-0  mr-1.5 hidden sm:block"
          />
        ) : (
          <Image
            src={OsmanityLogoW}
            alt="OsmanityLogoWhite"
            width={25}
            height={25}
            className="h-12 w-16 p-1 lg:p-0  mr-1.5 hidden sm:block"
          />
        )}
      </Link>
      <h1 className="text-xl font-bold tracking-[6px] uppercase text-center">
        Courses
      </h1>
    </div>
  );
};
