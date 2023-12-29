// "use client";

import Globe from "@/components/Footer/Globe";
import Hero from "@/components/Hero-section/Hero";
import Productivity from "@/components/Productivity/Productivity";
import { delay } from "@/lib/delay";

export default async function Home() {
  await delay(4000);
  return (
    <>
      <div className="bg-black">
        {/* <div className=" z-50 sticky top-0">
          <div className="absolute">
            <Navbar />
          </div>
        </div> */}
        <div className="h-full">
          <div className="overflow-hidden">
            <div className="relative ">
              {/* top planet */}
              <img
                className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30  image"
                width="4377"
                src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
                alt=""
              />
            </div>
            <div className="hero-section px-3 bg-black ">
              <Hero />
            </div>
            {/* <StickyNav /> */}
            <div
              id="productivity"
              className="home-campaign-productivity px-4 pt-8 overflow-hidden bg-[#0C1015]"
            >
              <Productivity />
            </div>{" "}
            {/*
            <div
              id="collaboration"
              className="home-campaign-productivity px-4 pt-8  overflow-hidden bg-[#0C1015]"
            >
              <Collaboration />
            </div>
            <div
              id="security"
              className="home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden bg-[#0C1015]"
            >
              <Security />
            </div>*/}
            <Globe />
            {/* <div className="max-w-[1280px] mx-auto relative z-[2]  px-5">
              <ul className="lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1">
                <li>
                  <sup id="footnote-1">1</sup> The Total Economic Impact™ Of
                  GitHub Enterprise Cloud and Advanced Security, a commissioned
                  study conducted by Forrester Consulting, 2022. Results are for
                  a composite organization based on interviewed customers.
                </li>
                <li>
                  <sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state
                  of open source software.
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* <div className="bg-[#0C1015] pb-[500px]" /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
