"use client";
import Spline from "@splinetool/react-spline";
export default function splineobj() {
  return (
    <div>
      {/* Laptop size */}
      <div className="absolute hidden right-0 xl:right-20 top-10 sm:top-20  z-30 w-auto h-auto sm:flex hero-drone  ">
        <div className="relative">
          <div className="absolute z-20 flex w-full h-full " />
          <Spline scene="https://prod.spline.design/9hflHH51haomJYpy/scene.splinecode" />
        </div>
      </div>
      {/* Mobile size */}
      <div className="absolute top-5 left-1 max-[320px]:left-0 right-0 sm:hidden mt-14 z-30 flex flex-1 hero-drone w-[320px] h-[800px]  mx-auto justify-center ">
        <div className="relative">
          <div className="absolute z-30 flex w-full h-full " />
          <Spline scene="https://prod.spline.design/MZGttUZFW6c-uT-W/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
