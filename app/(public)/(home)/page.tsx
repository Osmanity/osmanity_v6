// "use client";

import Hero from "@/components/Hero-section/Hero";
import CarouselSection from "@/components/Sections/clientCarausel/clientCarusel";
import ContactUs from "@/components/Sections/contactUs/contactUs";
import VideoExplainer1 from "@/components/Sections/videoExplainer1/videoExplainer1";
import VideoExplainer2 from "@/components/Sections/videoExplainer2/videoExplainer2";
import VideoExplainer3 from "@/components/Sections/videoExplainer3/videoExplainer3";
import VideoExplainer4 from "@/components/Sections/videoExplainer4/videoExplainer4";

// import { delay } from "@/lib/delay";

export default async function Home() {
  // await delay(5000);
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050016] ">
      <div className="relative w-full min-h-screen overflow-hidden hero-section">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="rotate-180 rounded-2xl absolute top-[-250px]  h-full w-full lg:w-4/5 min-h-[880px] sm:min-h-[1000px] -left-28 lg:-left-14 z-[10]  sm:object-contain  "
        >
          {/* <source src="/videos/blackhole.webm" type="video/webm" /> */}
          <source src="/videos/blackhole.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute top-0 left-0 z-50 w-full min-h-screen bg-black/30 " /> */}
        <div className="absolute top-0 left-0 z-[12] w-full min-h-[880px] sm:min-h-[1000px] bg-black/50  " />
        <div className=" w-full ">
          <Hero />
        </div>
      </div>
      <VideoExplainer1 />
      <VideoExplainer4 />
      <CarouselSection />
      <VideoExplainer2 />
      <VideoExplainer3 />
      <ContactUs />
      {/* <Globe /> */}

      {/* <div className="my-12 md:my-14 sm:my-12 ">
            <p className="text-[16px] leading-[24px] text-[#7d8590]">
              Trusted by&nbsp;↘︎
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-center">
              <Image
                src={require("../../public/img/blackroseLogo.svg")}
                alt="Stripe logo"
                height="140"
                className="my-3 scale-90 h-140 w-140"
              />
              <Image
                src={require("../../public/img/BlueAngel.svg")}
                alt="Stripe logo"
                height="100"
                className="my-3 scale-90 h-100 w-100"
              />
              <Image
                src={require("../../public/img/CVMasterna.svg")}
                alt="Stripe logo"
                height="100"
                className="my-3 scale-90"
              />
            </div>
          </div> */}

      {/* <section className="min-h-screen flex justify-center items-center text-white text-center">
        hello
        <div className="h-[1000px] w-80 bg-slate-400"></div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
}
