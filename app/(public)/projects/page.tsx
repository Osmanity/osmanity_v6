"use client";

import Heading from "@/components/Heading/Heading";
import Projects from "@/components/Projects/Projects";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen overflow-hidden ">
      {/* <section className="h-screen flex justify-center items-center">
        {" "}
        <Link href="/OsChatbot">
          <motion.div
            className="relative py-80  bg-black/70 not-hoverable rounded-3xl text-white z-2   w-full max-w-[450px] h-[270px] max-h-[270px] md:max-w-[800px] md:w-[800PX] md:h-[370px] md:max-h-[370px] border-0 p-5 md:p-8 flex flex-row justify-end "
            style={{
              boxShadow: `rgb(255, 255, 255) 0px 0px 1.2px inset, rgba(255, 255, 255, 0.1) 0px 0px 14.1107px inset;`,
            }}
            initial={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              opacity: 1,
              scale: 1.1,
            }}
          >
            <div className="absolute overflow-hidden rounded-bl-3xl rounded-tl-3xl left-[1px] bottom-[1px] h-full w-6/12 md:w-7/12 z-1">
              <motion.div
                className="justify-center items-center flex h-full relative"
                initial={{ opacity: 0.9, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  opacity: 1,
                  scale: 1.23,
                }}
              >
                <Image
                  src={OsmanityAvatar}
                  alt="OsmanityAvatar"
                  width={800}
                  height={800}
                  className=" h-full w-full mt-5  lg:p-0 pb-4 sm:pb-0  hidden sm:block object-bottom"
                />
              </motion.div>
            </div>
            <div className="flex flex-col justify-center w-7/12 md:w-7/12 relative z-2">
              <div>
                <div className="text-[10px] md:text-xs font-mono text-[#C4C5CC]">
                  Inc: Osmanity
                </div>
                <div className="text-md md:text-xl flex flex-nowrap">
                  <p className="pr-2 text-base font-mono md:text-xl relative break-all">
                    Dev-ID: Ibrahim Osman
                  </p>
                </div>
                <div className="flex flex-nowrap pt-4 text-lg md:text-2xl">
                  <p className="pr-2 font-semibold relative">
                    Curious About My Creations?
                    <br />
                    Let
                    <span className="fancy-text">
                      {" "}
                      Osmanity Virtual Avatar{" "}
                    </span>
                    Lead the Way in Our Interactive Interview, <br />
                    Lets start talking now!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </section>
      <section className="h-screen"> hello </section> */}
      <Heading
        className="pt-36 sm:pt-52 pb-24"
        title="Projects"
        subTitle="Our Collection"
      />
      <Projects className="pt-0 pb-52" itemsPerPage={4} />
    </div>
  );
};

export default page;
