import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="md:py-20 p-4 container ">
      <div className="border-[1px] lg:w-2/3 mx-auto p-10 rounded-xl ">
        <div className=" flex flex-col-reverse gap-8 md:flex-row justify-between items-center ">
          <div>
            <div className="text-4xl font-bold mb-5">
              Transforming Ideas Into Digital Solutions
            </div>
            <div>Contact us today to discuss your project needs and goals.</div>
          </div>
          <div className="">
            {/* <Image
              src="/img/collab.png"
              alt="colla"
              className="hidden md:block"
              width={400}
              height={400}
            /> */}
            <Image
              src="/img/collab_mobile.png"
              alt="colla"
              className="hidden sm:block md:-mb-16"
              width={400}
              height={400}
            />
            <Image
              src="/img/collab_mobile.png"
              alt="colla"
              className="block sm:hidden"
              width={300}
              height={300}
            />
          </div>
        </div>
        <Link href="/contactUs">
          <button
            className="bg-gradient-to-r
            from-[#c990ff]
            to-[#3e15f3] text-white px-6 py-3 md:w-1/4 mt-5 rounded-lg"
          >
            Get Free Consultation
          </button>
        </Link>
        <Link href="/contactUs">
          <button
            className="ml-5 bg-gradient-to-r
            dark:text-white text-black px-6 py-3 md:w-1/4 mt-5 rounded-lg"
          >
            Contact Sales
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
