"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";

export default function SliderTwo() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      play: true,
      delay: 2500,
    }),
  ]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla2" ref={emblaRef}>
      <div className="embla__container2">
        <div className="embla__slide2">
          <Image
            // priority
            src="/img/bluangel_webbplatsen.png"
            alt="logo"
            width={700}
            height={300}
            className="shadow-md  cursor-pointer hover:opacity-70"
          />
          hello
        </div>
        <div className="embla__slide2">
          <Image
            // priority
            src="/img/bluangel_webbplatsen.png"
            alt="logo"
            width={700}
            height={300}
            className="shadow-md  cursor-pointer hover:opacity-70"
          />
        </div>
        <div className="embla__slide2">
          <Image
            // priority
            src="/img/bluangel_webbplatsen.png"
            alt="logo"
            width={700}
            height={300}
            className="shadow-md cursor-pointer hover:opacity-70"
          />
        </div>
      </div>
    </div>
  );
}
