import Image from "next/image";

const VideoExplainer3 = () => {
  return (
    <div
      className="
    flex
    
    flex-col md:flex-row md:justify-evenly
   lg:container
   p-4
   md:py-20
   text-start sm:text-center
    "
    >
      <div className="flex-col md:flex-row gap-6 flex">
        <div className="w-full h-full gradientBgVideo p-2">
          <video
            className="rounded-xl w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videos/video-3.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex-col border p-4 rounded-xl md:w-2/5">
          <div
            className="text-4xl flex justify-center max-[445px]:text-start text-center
                sm:text-4xl
                bg-gradient-to-r
              from-[#c990ff]
              to-[#3e15f3]
                bg-clip-text
                font-bold
                text-transparent
                "
          >
            Fully Customizable eCommerce
          </div>
          <div className="flex justify-center text-xs lg:text-sm ">
            <div className="md:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 w-96">
              <div className="col-span-1 md:col-span-4 flex items-center gap-4">
                <Image
                  src="/img/IconsImage/icon-store.png"
                  alt="Store Templates Icon"
                  width={70}
                  height={70}
                />
                <p className="text-start">
                  Choose from a variety of store templates to get started.
                  Customize your store to fit your brand.
                </p>
              </div>

              <div className="col-span-1 md:col-span-4 flex items-center gap-4">
                <Image
                  src="/img/IconsImage/icon-product.png"
                  alt="Product Management Icon"
                  width={70}
                  height={70}
                />
                <p>
                  Add unlimited products and variations. Manage your inventory
                  with ease.
                </p>
              </div>

              <div className="col-span-1 md:col-span-4 flex items-center gap-4">
                <Image
                  src="/img/IconsImage/icon-analytics.png"
                  alt="Analytics Tools Icon"
                  width={70}
                  height={70}
                />
                <p>
                  Gain valuable insights into your customers and products with
                  our analytics tools.
                </p>
              </div>

              <div className="col-span-1 md:col-span-4 flex items-center gap-4">
                <Image
                  src="/img/IconsImage/icon-shield.png"
                  alt="Security Shield Icon"
                  width={70}
                  height={70}
                />
                <p>
                  Best in class security to protect your data and your
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoExplainer3;
