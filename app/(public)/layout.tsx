import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  return (
    <div className="bg-[#252525] text-black min-h-screen">
      <div className="z-50 sticky top-0">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
