"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WebProjects = () => {
  return (
    <div className="text-white my-60 px-4 sm:px-20">
      {/* <div className="mt-24 p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Website Design <br /> that works
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Creating, designing and developing websites that work for your
          business.
        </p>
      </div> */}
      <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-22 relative z-[5]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500 dark:text-white/80"
        >
          Website Design <br /> that works
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="text-2xl lg:text-4xl text-black dark:text-white"
        >
          Creating, designing and developing websites that work for your
          business.
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProjects;
