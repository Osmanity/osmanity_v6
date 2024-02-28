"use client";
import { useAuth } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ProfileButton from "../ui/ProfileButton";
import { Button } from "../ui/button";
import CoursesNav from "./Courses";
import ProductNav from "./ServiceNav";

import { MenuIcon } from "lucide-react";

// import { useRive } from "@rive-app/react-canvas";

import OsmanityLogo from "@/./public/img/OsmanityLogo.svg";
import OsmanityLogoW from "@/./public/img/OsmanityLogoW.svg";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import { ThemeToggle } from "../ThemeToggle";
import ServiceNav from "./ServiceNav";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const { userId } = useAuth();
  const router = useRouter();

  const pathname = usePathname();
  let newPathname = "";

  newPathname = pathname;
  if (pathname.includes("/blogs")) {
    newPathname = "/blogs";
  } else if (pathname.includes("/projects")) {
    newPathname = "/projects";
  }

  // const { rive, RiveComponent } = useRive({
  //   src: "/assets/riveObj/galactic_button.riv",
  //   stateMachines: "State Machine 1",
  //   artboard: "Galaxy Button",
  //   autoplay: true,
  //   onLoadError: () => console.log("error"),
  //   onLoad: () => console.log("loading"),
  // });

  return (
    <div className="w-screen mx-auto select-none  ">
      <div className="dark:text-white text-black  bg-gradient-to-b dark:from-black from-white from-30% dark:via-black/50 via-white/50 via-80% pb-4  py-2 pl-4 z-[999] sticky top-0 ">
        <div className="flex flex-row items-center justify-center lg:container ">
          <Link href={"/"} className="opacity-100 hover:opacity-70">
            {resolvedTheme === "dark" ? (
              <Image
                src={OsmanityLogo}
                alt="OsmanityLogoBlack"
                width={50}
                height={50}
                className="h-16 w-24 p-1 lg:p-0 pb-2 sm:pb-0 mr-4 hidden sm:block"
              />
            ) : (
              <Image
                src={OsmanityLogoW}
                alt="OsmanityLogoWhite"
                width={50}
                height={50}
                className="h-16 w-24 p-1 lg:p-0 pb-2 sm:pb-0 mr-4 hidden sm:block"
              />
            )}
          </Link>

          <div className="flex flex-col w-full justify-center items-start">
            <div className="flex sm:justify-between justify-center items-center max-lg:w-full">
              <Sheet>
                {/* <div className="lg:hidden ">
              <a
                href=""
                className="px-2 py-[6px] border-[1px] rounded-md hover:text-neutral-400"
              >
                Sign up
              </a>
            </div> */}
                {/* <a className="" href="https://github.com">
              <svg
                height="32"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className=" text-white"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a> */}

                <div
                  style={{
                    // color: "#fff",
                    // fontSize: "2.2rem",
                    fontWeight: "bold",
                    letterSpacing: "12px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    // paddingLeft: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="text-xl sm:text-3xl dark:text-white text-black  hover:cursor-pointer opacity-100 hover:opacity-70"
                  onClick={() => router.push("/")}
                >
                  Osmanity
                </div>
                <SheetTrigger>
                  <MenuIcon
                    className="lg:hidden h-6 w-6 sm:h-8 sm:w-8 cursor-pointer absolute right-3 top-2 pt-0.5 sm:top-6 sm:right-8 sm:pt-0 dark:text-white text-black "
                    size={24}
                    // color={resolvedTheme === "dark" ? "white" : "black"}
                  />
                  {/* <button
                  type="button"
                  // onClick={() => setShowNav(!showNav)}
                  className="lg:hidden cursor-pointer absolute right-0 top-0 p-3.5 sm:p-5"
                >
                  <div
                    className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${
                      showNav ? "rotate-45 mb-0 " : "rotate-0 mb-1"
                    } `}
                  ></div>
                  <div
                    className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
                      showNav ? "hidden mb-0" : "mb-1"
                    } `}
                  ></div>
                  <div
                    className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${
                      showNav ? "-rotate-45 mb-0" : "rotate-0"
                    }`}
                  ></div>
                </button> */}
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription> */}
                    <div className="flex  flex-col ">
                      <div className="max-lg:flex justify-center max-lg:border-[1px] max-lg:mr-4 rounded-md max-lg:bg-neutral-800 mt-2">
                        <a
                          href="/contactUs"
                          // className="hover:text-neutral-400 max-lg:py-2 max-lg:text-[16px] max-lg:font-semibold  text-white  "
                        >
                          Contact Us!
                        </a>
                      </div>

                      <div className="flex items-center justify-center mt-2 ">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="mr-4 pr-0.5"
                          aria-label="Shopping Cart"
                        >
                          <ShoppingCart className="h-6 w-6" />
                          <span className="sr-only">Shopping Cart</span>
                        </Button>
                        <div
                          style={{
                            border: "1px solid #000000",
                            padding: "15px 0px",
                          }}
                          className="mr-5"
                        />
                        {/* <ProfileButton /> */}
                        {/* <UserButton afterSignOutUrl="/" /> */}
                        <ProfileButton />
                      </div>
                    </div>
                    <div className="max-h-screen overflow-y-auto flex ">
                      <nav className="mt-0  text-[15.5px] mb-0 max-lg:py-0">
                        <ul className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto  overflow-y-auto ">
                          <ServiceNav />

                          <li onClick={() => router.push("/about")}>
                            <a className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300 hover:cursor-pointer">
                              About
                            </a>
                          </li>

                          <li onClick={() => router.push("/projects")}>
                            <a className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300 hover:cursor-pointer">
                              Projects
                            </a>
                          </li>
                          {/* <li>
                    <a className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300">
                      Courses
                    </a>
                  </li> */}
                          <li onClick={() => router.push("/blogs")}>
                            <a className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300 hover:cursor-pointer">
                              Blogs
                            </a>
                          </li>
                          <CoursesNav />
                          <div className=" pb-[150px]" />

                          {/* <OpenSourceNav /> */}
                        </ul>
                      </nav>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>

            <div
              className={` flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40  ${
                showNav
                  ? "max-lg:translate-x-0 max-lg:scale-100"
                  : " max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"
              }`}
            >
              <div className="flex max-lg:flex-col lg:items-center lg:justify-between max-lg:justify-between max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px]  overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg">
                <nav className="mt-0  text-[15.5px] mb-0 max-lg:py-10 ">
                  <ul className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto  overflow-y-auto">
                    <li onClick={() => router.push("/")}>
                      <a
                        // className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300 hover:cursor-pointer"
                        className={`relative mt-1 mr-1.5 hover:cursor-pointer max-lg:py-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-violet-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px]   pb-1  ${
                          newPathname === "/"
                            ? "border-violet-600 text-violet-600 before:scale-x-[1] "
                            : "border-transparent"
                        } `}
                      >
                        Home
                      </a>
                    </li>

                    <ProductNav />

                    <li onClick={() => router.push("/about")}>
                      <a
                        // className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300 hover:cursor-pointer"
                        className={`relative mt-1 mr-1.5 hover:cursor-pointer max-lg:py-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-violet-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px]   pb-1  ${
                          newPathname === "/about"
                            ? "border-violet-600 text-violet-600 before:scale-x-[1] "
                            : "border-transparent"
                        } `}
                      >
                        About
                      </a>
                    </li>

                    <li onClick={() => router.push("/projects")}>
                      <a
                        // className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300 hover:cursor-pointer"
                        className={`relative mt-1 mr-1.5 hover:cursor-pointer max-lg:py-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-violet-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px]   pb-1  ${
                          newPathname === "/projects"
                            ? "border-violet-600 text-violet-600 before:scale-x-[1] "
                            : "border-transparent"
                        } `}
                      >
                        Projects
                      </a>
                    </li>
                    {/* <li>
                    <a className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300">
                      Courses
                    </a>
                  </li> */}
                    <li onClick={() => router.push("/blogs")}>
                      <a
                        // className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300 hover:cursor-pointer"
                        className={`relative mt-1 mr-1.5 hover:cursor-pointer max-lg:py-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-violet-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px]   pb-1  ${
                          newPathname === "/blogs"
                            ? "border-violet-600 text-violet-600 before:scale-x-[1] "
                            : "border-transparent"
                        } `}
                      >
                        Blogs
                      </a>
                    </li>
                    <CoursesNav />
                    <li
                      onClick={() =>
                        router.push("https://docs.osmanity.com/docs")
                      }
                    >
                      <a
                        // className="max-lg:font-semibold  flex items-center p-1 mr-2 hover:text-neutral-300 hover:cursor-pointer"
                        className={`relative mt-1 mr-1.5 hover:cursor-pointer max-lg:py-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-violet-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px]   pb-1  ${
                          newPathname === "/docs"
                            ? "border-violet-600 text-violet-600 before:scale-x-[1] "
                            : "border-transparent"
                        } `}
                      >
                        Docs
                      </a>
                    </li>

                    {/* <OpenSourceNav /> */}
                  </ul>
                </nav>

                <div className="lg:flex items-center max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4 relative">
                  {/* <div className="max-lg:flex justify-center max-lg:border-[1px] max-lg:mr-4 rounded-md max-lg:bg-neutral-800 "> */}

                  <a
                    href="/contactUs"
                    // className="hover:text-neutral-400 max-lg:py-2 max-lg:text-[16px] max-lg:font-semibold mr-1.5 "
                    className={`relative mt-1 mr-1.5 max-lg:py-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1.5px] before:bg-violet-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px]  pb-1  ${
                      newPathname === "/contactUs"
                        ? "border-violet-600 text-violet-600 before:scale-x-[1] "
                        : "border-transparent"
                    } `}
                  >
                    Contact Us!
                  </a>
                  {/* <a href="/contact" className="">
                    <RiveComponent
                      className="z-1000 w-full h-full top-0 absolute left-0 opacity-70 hover:opacity-100"
                      // onMouseEnter={() => rive && rive.play()}
                      // onMouseLeave={() => rive && rive.pause()}
                    />
                  </a>

                  <div className="pl-56" /> */}
                  {/* </div> */}
                  <div className="border  dark:border-white border-black px-0 py-3" />
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="mr-4 pr-0.5"
                      aria-label="Shopping Cart"
                    >
                      <ShoppingCart className="h-6 w-6" />
                      <span className="sr-only">Shopping Cart</span>
                    </Button>
                    {/* <ProfileButton /> */}
                    {/* <UserButton afterSignOutUrl="/" /> */}
                    <ProfileButton />
                    <div className="mx-4">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
