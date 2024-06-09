"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";

export default function HeroSlide() {
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
    <div className="embla2 p-10 " ref={emblaRef}>
      <div className="embla__container2 ">
        <div className="embla__slide2 mx-20">
          <div className="relative">
            <div className="absolute bottom-0 sm:bottom-auto sm:top-0 right-0 z-10 flex justify-end -mb-4 -mr-2 sm:-mb-0 sm:-mt-4 sm:-mr-10">
              <p className="px-4 bg-black text-white rounded-full border-2  border-white shadow-md  dark:border-black dark:bg-white dark:text-black text-sm sm:text-lg">
                Web-development
              </p>
            </div>
            <Image
              // priority
              src="/img/bluangel_webbplatsen.png"
              alt="logo"
              width={1920}
              height={1080}
              className="shadow-md   "
            />
          </div>
        </div>
        <div className="embla__slide2 mx-20">
          <div className="relative">
            <div className="absolute bottom-0 sm:bottom-auto sm:top-0 right-0 z-10 flex justify-end -mb-4 -mr-2 sm:-mb-0 sm:-mt-4 sm:-mr-10">
              <p className="px-4 bg-black text-white rounded-full border-2  border-white shadow-md  dark:border-black dark:bg-white dark:text-black text-sm sm:text-lg">
                Mobile-development
              </p>
            </div>
            <Image
              // priority
              src="/img/bluangel_webbplatsen.png"
              alt="logo"
              width={1920}
              height={1080}
              className="shadow-md  "
            />
          </div>
        </div>
        <div className="embla__slide2 mx-20 ">
          <div className="relative">
            <div className="absolute bottom-0 sm:bottom-auto sm:top-0 right-0 z-10 flex justify-end -mb-4 -mr-2 sm:-mb-0 sm:-mt-4 sm:-mr-10">
              <p className="px-4 bg-black text-white rounded-full border-2  border-white shadow-md  dark:border-black dark:bg-white dark:text-black text-sm sm:text-lg">
                Advertisement
              </p>
            </div>
            <Image
              // priority
              src="/img/bluangel_webbplatsen.png"
              alt="logo"
              width={1920}
              height={1080}
              className="shadow-md  "
            />
          </div>
        </div>
        <div className="embla__slide2 mx-20">
          <div className="relative">
            <div className="absolute bottom-0 sm:bottom-auto sm:top-0 right-0 z-10 flex justify-end -mb-4 -mr-2 sm:-mb-0 sm:-mt-4 sm:-mr-10">
              <p className="px-4 bg-black text-white rounded-full border-2  border-white shadow-md  dark:border-black dark:bg-white dark:text-black text-sm sm:text-lg">
                Ecommerce
              </p>
            </div>
            <Image
              // priority
              src="/img/bluangel_webbplatsen.png"
              alt="logo"
              width={1920}
              height={1080}
              className="shadow-md  "
            />
          </div>
        </div>
        <div className="embla__slide2 mx-20">
          <div className="relative">
            <div className="absolute bottom-0 sm:bottom-auto sm:top-0 right-0 z-10 flex justify-end -mb-4 -mr-2 sm:-mb-0 sm:-mt-4 sm:-mr-10">
              <p className="px-4 bg-black text-white rounded-full border-2  border-white shadow-md  dark:border-black dark:bg-white dark:text-black text-sm sm:text-lg">
                AI-development
              </p>
            </div>
            <Image
              // priority
              src="/img/bluangel_webbplatsen.png"
              alt="logo"
              width={1920}
              height={1080}
              className="shadow-md  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
