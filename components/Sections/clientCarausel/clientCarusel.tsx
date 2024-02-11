"use client";

import { useEffect, useState } from "react";

const images = [
  {
    url: "/img/logo/logo-1.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-3.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-4.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-5.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-6.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-7.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-8.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-9.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-10.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-11.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-12.svg",
    alt: "Logo",
  },

  {
    url: "/img/logo/logo-13.svg",
    alt: "Logo",
  },
];

const CarouselSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-4 sm:container">
      <div
        className="
            md:pb-10 
            items-center 
            justify-center 
            flex 
            text-3xl
            sm:text-4xl 
            font-bold 
            text-gradient
            bg-gradient-to-r
            from-[#c990ff]
            to-[#3e15f3]
            bg-clip-text
            text-transparent
          "
      >
        More than 30+ brands have built their business with us!
      </div>

      {/* <div className="grid grid-cols-3 p-4 md:flex">
        <AnimatePresence custom={currentImageIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.8,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              className="flex items-center justify-center h-40 w-40"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div> */}
    </div>
  );
};

export default CarouselSection;
