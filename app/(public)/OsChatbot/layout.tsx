import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  return (
    <div className=" text-white relative ">
      <div className="sticky top-0 z-[999] ">
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
