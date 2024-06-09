import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface TestimonialProps {
  className: string;
}

interface TestimonialContent {
  heading: {
    title: string;
    subTitle: string;
  };
  testimonials: {
    img: string;
    name: string;
    titleRole: string;
    quote: string;
  }[];
}

const testimonialContent: TestimonialContent = {
  heading: {
    title: "Hear what our customers say.",
    subTitle: "Testimonials",
  },
  testimonials: [
    {
      img: "/img/person-1-min.jpg",
      name: "Jane Cooper",
      titleRole: "CEO, Kicks.se",
      quote:
        "Collaborating with Osmanity has been an absolute pleasure. They truly understood our vision for our dream website and turned it into a stunning reality. Their attention to detail and creativity exceeded our expectations. Working with Ibrahim and his team at Osmanity was truly a dream come true.",
    },
    {
      img: "/img/person-2-min.jpg",
      name: "Alexandra Moore",
      titleRole: "Interior Designer",
      quote:
        "I've had the privilege of partnering with Osmanity on several web development projects. Their ability to combine functionality, aesthetics, and user experience in their designs is truly remarkable. Osmanity provides the perfect foundation for achieving excellence in web development.",
    },
    {
      img: "/img/person-3-min.jpg",
      name: "James Mayer",
      titleRole: "Landscape Architect",
      quote:
        "If you're looking for a web development partner that combines creativity, technical expertise, and unwavering dedication, Osmanity is the way to go. Trust me; you won't be disappointed.",
    },
  ],
};

const Testimonial: React.FC<TestimonialProps> = ({ className }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isEnd, setIsEnd] = useState<boolean | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean | null>(null);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    if (sliderRef.current) {
      setIsEnd(sliderRef.current.swiper.isEnd);
      setIsBeginning(sliderRef.current.swiper.isBeginning);
    }
  });

  const prevHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev();
    }
  }, []);

  const nextHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <section className={`${className} overflow-hidden`}>
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12 flex gap-0 items-center">
            <div className="text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto mb-16">
              {testimonialContent.heading.subTitle && (
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
                  className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500"
                >
                  {testimonialContent.heading.subTitle}
                </motion.span>
              )}
              {testimonialContent.heading.title && (
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
                  className="text-2xl lg:text-4xl"
                >
                  {testimonialContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className="lg:flex justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-full lg:w-10/12 lg:flex gap-0 items-center"
          >
            <Swiper
              ref={sliderRef}
              speed={700}
              spaceBetween={30}
              onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
              className="z-50 py-32 mb-7 relative flex items-center"
            >
              {testimonialContent.testimonials.map((testimonial, idx) => (
                <SwiperSlide className="w-full" key={testimonial.name}>
                  <div className="block md:flex overflow-y-visible mt-10 items-stretch bg-white dark:bg-black  dark:border-1 border border-white/30 shadow-sm dark:shadow-none dark:shadow-white">
                    <div className="md:w-4/12">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={379}
                        height={320}
                        className="object-cover object-center !h-full !w-full"
                      />
                    </div>
                    <div className="md:w-8/12 p-7 md:p-16 flex items-center">
                      <div>
                        <blockquote className="text-lg mb-7">
                          <span className="text-[200px] leading-[0] relative text-violet-600 block">
                            &ldquo;
                          </span>
                          {testimonial.quote}
                        </blockquote>
                        <div className="flex space-x-3 text-sm">
                          <strong>{testimonial.name}</strong>
                          <span>&mdash;</span>
                          <span className="italic">
                            {testimonial.titleRole}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex space-x-3">
            <div
              onClick={prevHandler}
              className={`${
                isBeginning === true
                  ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : "opacity-100 bg-violet-600 text-white"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronLeft
                className={`text-3xl text-white dark:text-black transition-all duration-300 ease-in-out group-hover:text-white ${
                  isBeginning === true
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>
            <div
              onClick={nextHandler}
              className={`${
                isEnd === true
                  ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : "opacity-100 bg-violet-600 text-white"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <BiChevronRight
                className={`text-3xl text-white dark:text-black transition-all duration-300 ease-in-out group-hover:text-white ${
                  isEnd === true
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
