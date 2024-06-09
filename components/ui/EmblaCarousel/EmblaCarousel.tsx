"use client";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import "./Embla.css";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const EmblaCarousel: React.FC<PropType> = (props) => {
  //   const { slides, options } = props;
  //   const { slides, options } = props;
  const slides = props.slides || SLIDES;
  const options = props.options || OPTIONS;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla ">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number bg-slate-400">
                {index + 1}
              </div>
              helo
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls bg-slate-900/40">
        <div className="embla__dots">
          helo
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
      </div>
    </section>
  );
};

export default EmblaCarousel;
