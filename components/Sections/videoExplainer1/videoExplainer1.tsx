const VideoExplainer1 = () => {
  return (
    <section className="md:py-20 py-10 px-4 bg-gradient-to-r from-indigo-900 to-indigo-300 dark:from-black/30 dark:to-black/30 spacey-10 bg-black/30 ">
      <div className=" sm:p-0 sm:container mx-auto text-start sm:text-center">
        {/*
        old heading styling
        className="text-5xl sm:text-6xl flex justify-center font-bold md:px-20 pb-10
            text-gradient
            bg-gradient-to-r
            from-[#c990ff]
            to-[#3e15f3]
            bg-clip-text
            text-transparent
            " */}
        <div
          className="bg-gradient-to-r
          from-[#c990ff]
          to-[#3e15f3]
          bg-clip-text
          text-transparent
          text-4xl
          md:text-5xl
          font-bold
          pb-10
            "
        >
          Build a brand and start selling in seconds
        </div>

        <p className="text-lg md:text-xl md-10 text-white bg-clip-text font-bold">
          No matter what you sell, Osmanity has everything you need to build
          your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10 ">
          <button
            className="bg-gradient-to-r
            from-[#c990ff]
            to-[#3e15f3] text-white px-10 py-4 rounded-md text-lg font-bold hover:from-[#c990ff]/75 hover:to-[#3e15f3]/75"
          >
            Get Started
          </button>
          <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">
            Learn More
          </button>
        </div>

        <div className="pt-10 ">
          <div className="gradientBgVideo">
            <div className="p-2">
              <video className="rounded-xl " autoPlay playsInline muted loop>
                <source src="/videos/hero-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExplainer1;
