import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs";
import { ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const { userId } = auth();

  return (
    <div className="min-h-screen relative">
      <div className="z-50 sticky top-0">
        <div className="absolute">
          <Navbar />
        </div>
      </div>

      <div className="relative flex flex-1 min-h-screen flex-col md:flex-row dark:bg-black dark:text-white bg-white text-black mx-auto overflow-hidden">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default PublicLayout;
