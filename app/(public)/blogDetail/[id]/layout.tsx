import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  return (
    <div className=" text-white min-h-screen relative bg-[#050016] ">
      <div className="z-50 sticky top-0 ">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div className="absolute w-full h-full -top-14 left-0 z-[5]">
        <div className="glow" />
        <svg
          className="grid-glow"
          stroke="white"
          fill="transparent"
          viewBox="0 0 1600 480"
        >
          <pattern
            id="small-grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <rect stroke-width="0.2" width="100%" height="100%"></rect>
          </pattern>

          <pattern
            id="big-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <rect width="100%" height="100%"></rect>
          </pattern>

          <rect width="100%" height="100%" fill="url(#big-grid)"></rect>

          <rect width="100%" height="100%" fill="url(#small-grid)"></rect>
        </svg>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
