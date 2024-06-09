import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  return (
    <div className="  dark:bg-black dark:text-white bg-[#F3F5F8] text-black min-h-screen relative  ">
      <div className="z-50 sticky top-0">
        <div className="absolute">
          <Navbar />
        </div>
      </div>

      <div className="relative min-h-screen mx-auto overflow-clip">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
