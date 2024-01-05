const VideoExplainer3 = () => {
  return (
    <div className="items-center flex justify-center md:py-20 text-start sm:text-center">
      <div
        className=" md:text-6xl text-4xl 
        bg-gradient-to-r
        from-[#c990ff]
        to-[#3e15f3]
      bg-clip-text
      text-transparent
      pb-10
      font-bold
      p-4 sm:container

      "
      >
        <h1>
          Content Management System
          <br />
          Made Simple & Unique.
        </h1>

        <div className=" pt-10  xl:mx-32">
          <div className="gradientBgVideo">
            <div className="p-2 justify-center items-center flex">
              <video className="rounded-xl " autoPlay muted loop>
                <source src="/videos/video-4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoExplainer3;
