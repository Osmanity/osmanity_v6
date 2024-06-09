import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  return (
    <div className=" dark:bg-black dark:text-white bg-[#F3F5F8] text-black min-h-screen relative  ">
      <div className="z-50 sticky top-0">
        <div className="absolute">
          <Navbar />
        </div>
      </div>

      <div className="relative min-h-screen mx-auto overflow-hidden">
        <img
          className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image overflow-hidden dark:bg-black dark:text-white bg-white text-black"
          width="4377"
          src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
          alt=""
        />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
