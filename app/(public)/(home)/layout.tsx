import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  return (
    <div className=" text-white min-h-screen relative bg-[#252525] ">
      <div className="z-50 sticky top-0 ">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div className="relative min-h-screen mx-auto overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
