"use client";

import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        right: "10px",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        left: "10px",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

const SliderOne = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const imgHeight = 2000;
  const imgWidth = 2000;

  const settings = {
    focusOnSelect: true,
    arrows: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb   z-40",
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: " w-full mx-auto  center-mode ",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="my-20 ">
      <Slider ref={sliderRef} {...settings}>
        <div className="rounded-md px-2 md:p-10">
          <Image
            src="/img/bluangel_webbplatsen.png"
            alt="logo"
            width={imgHeight}
            height={imgWidth}
            className="rounded-2xl cursor-pointer hover:opacity-70"
          />
        </div>
        <div className="rounded-md px-2 md:p-10">
          <Image
            src="/img/bluangel_webbplatsen.png"
            alt="logo"
            width={imgHeight}
            height={imgWidth}
            className="rounded-2xl cursor-pointer hover:opacity-70"
          />
        </div>
        <div className="rounded-md px-2 md:p-10">
          <Image
            src="/img/bluangel_webbplatsen.png"
            alt="logo"
            width={imgHeight}
            height={imgWidth}
            className="rounded-2xl cursor-pointer hover:opacity-70"
          />
        </div>
        <div className="rounded-md px-2 md:p-10">
          <Image
            src="/img/bluangel_webbplatsen.png"
            alt="logo"
            width={imgHeight}
            height={imgWidth}
            className="rounded-2xl cursor-pointer hover:opacity-70"
          />
        </div>
        <div className="rounded-md px-2 md:p-10">
          <Image
            src="/img/bluangel_webbplatsen.png"
            alt="logo"
            width={imgHeight}
            height={imgWidth}
            className="rounded-2xl cursor-pointer hover:opacity-70"
          />
        </div>
      </Slider>
      <div className="pt-6" style={{ textAlign: "center" }}>
        <button className="pr-4" onClick={previous}>
          Previous
        </button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default SliderOne;
