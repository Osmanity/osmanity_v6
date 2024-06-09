import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs";

const PublicLayout = ({
  children,
  splineobj,
}: {
  children: React.ReactNode;
  splineobj: React.ReactNode;
}) => {
  const { userId } = auth();

  return (
    <div className="min-h-screen relative dark:bg-black dark:text-white bg-[#F3F5F8] text-black ">
      <div className="z-50 sticky top-0 ">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div className="relative w-full min-h-screen mx-auto overflow-hidden">
        {children}
      </div>
      {/* {splineobj} */}
      <Footer />
    </div>
  );
};

export default PublicLayout;
