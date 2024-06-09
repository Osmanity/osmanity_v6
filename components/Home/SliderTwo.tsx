"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../ui/EmblaCarousel/EmblaCarouselArrowButtons";
import {
  DotButton,
  useDotButton,
} from "../ui/EmblaCarousel/EmblaCarouselDotButton";

export default function SliderTwo() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 4500 }),
  ]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi],
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(false));
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="relative">
      <div className="flex items-center justify-center absolute z-50 top-0 left-0 w-10 h-full">
        <PrevButton
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
          className=""
        />
      </div>
      <div className="embla2 mx-10" ref={emblaRef}>
        {/* <div className="embla__viewport" ref={emblaRef}> */}
        <div className="embla__container2 ">
          {" "}
          <div className="embla__slide2 px-4" key={1}>
            <div className="flex xl:flex-row flex-col gap-4">
              <div className="">
                <Image
                  // priority
                  src="/img/blueangel_mockup.png"
                  alt="logo"
                  width={700}
                  height={300}
                  className="  cursor-pointer hover:opacity-70"
                />
              </div>
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
                className="text-2xl lg:text-4xl mb-10"
              >
                Saas App
              </motion.h2>
            </div>
          </div>
          <div className="embla__slide2 px-4" key={2}>
            <div className="flex xl:flex-row flex-col gap-4">
              <div className="">
                <Image
                  // priority
                  src="/img/bluangel_webbplatsen.png"
                  alt="logo"
                  width={700}
                  height={300}
                  className="shadow-md  cursor-pointer hover:opacity-70"
                />
              </div>
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
                className="text-2xl lg:text-4xl mb-10"
              >
                Ecommerce webb app
              </motion.h2>
            </div>
          </div>
          <div className="embla__slide2 px-4" key={3}>
            <div className="flex xl:flex-row flex-col gap-4">
              <div className="">
                <Image
                  // priority
                  src="/img/bluangel_webbplatsen.png"
                  alt="logo"
                  width={700}
                  height={300}
                  className="shadow-md  cursor-pointer hover:opacity-70"
                />
              </div>
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
                className="text-2xl lg:text-4xl mb-10"
              >
                Dentis Booking Webb app
              </motion.h2>
            </div>
          </div>
        </div>
        {/* </div>   */}
        <div className="flex flex-row justify-center my-4">
          <div className="embla__buttons flex flex-row gap-2">
            {/* <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          /> */}
          </div>
        </div>
      </div>

      <div className="mx-2 flex justify-center items-center ">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
        <button className="ml-4" onClick={toggleAutoplay} type="button">
          {isPlaying ? (
            <Pause height={28} width={28} />
          ) : (
            <Play height={28} width={28} />
          )}
        </button>
      </div>
      <div className="flex items-center justify-center absolute z-50 top-0 right-0 w-10 h-full">
        <NextButton
          onClick={() => onButtonAutoplayClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  );
}
