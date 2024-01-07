"use client";

import Hero from "@/components/Hero-section/Hero";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050016] ">
      <div className="relative w-full min-h-screen overflow-hidden hero-section">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="rotate-180 rounded-2xl absolute top-[-250px]  h-full w-full lg:w-4/5 min-h-[940px] sm:min-h-[1000px] -left-28 lg:-left-14 z-[10]  sm:object-contain  "
        >
          {/* <source src="/videos/blackhole.webm" type="video/webm" /> */}
          <source src="/videos/blackhole.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute top-0 left-0 z-50 w-full min-h-screen bg-black/30 " /> */}
        <div className="absolute top-0 left-0 z-[12] w-full min-h-[940px] sm:min-h-[1000px] bg-black/50  " />
        <div className=" w-full ">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Page;
