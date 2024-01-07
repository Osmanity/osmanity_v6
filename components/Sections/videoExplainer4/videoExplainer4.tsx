"use client";

const features = [
  {
    name: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/img/IconsImage/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: "Fast ",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/img/IconsImage/icon-fast.png",
    alt: "Customizable",
  },
  {
    name: "Integrations",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/img/IconsImage/icon-journey.png",
    alt: "Customizable",
  },
  {
    name: "Full Stack",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/img/IconsImage/icon-layer.png",
    alt: "Customizable",
  },
  {
    name: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/img/IconsImage/icon-location.png",
    alt: "Customizable",
  },
  {
    name: "Support",
    image: "/img/IconsImage/icon-support-1.png",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Customizable",
  },
];

const VideoExplainer4 = () => {
  return (
    <div className="p-4 sm:container">
      <div
        className="md:flex-row flex-col items-center flex justify-center pb-10 relative
        
        "
      >
        <div className="py-5 pr-5 justify-center lg:w-2/5 md:w-3/5 ">
          <div
            className="
                bg-gradient-to-r
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
            From startup to enterprise, we are built for every type of business.
          </div>
          <div className="text-2xl mb-8">
            Built for all businesses and communities, We are the only business
            partnership you need to grow your business.
          </div>
          <button
            className="bg-gradient-to-r
              from-[#c990ff]
              to-[#3e15f3] text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:opacity-75"
          >
            Get Started
          </button>
        </div>
        <div className="flex flex-1 w-full md:w-2/5  max-[1300px]:-mr-80 max-[768px]:mr-0 ">
          <video
            className="flex flex-1 rounded-xl w-full h-full gradientBgVideo p-2 md:w-2/5"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src="/videos/video-2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* <div className="flex-col items-center justify-center">
        <div
          className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                from-purple-400
                to-blue-800
                bg-clip-text
                text-transparent

                
                
                "
        >
          Product Features
        </div>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
            >
              <div
                className="
                            text-gray-600 text-3xl font-bold
                            "
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                />
                <div>
                  <div
                    className="text-2xl pb-4 bg-gradient-to-r
                    from-purple-400
                    to-blue-800
                      bg-clip-text
                      text-transparent                                
                                    "
                  >
                    {feature.name}
                  </div>

                  <div className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default VideoExplainer4;
