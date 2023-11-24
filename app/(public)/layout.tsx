import Footer from "@/components/Footerv2";
import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  return (
    //add body tag and change the bg for this layout importent

    <section className="h-full bg-[#252525] text-black">
      {/* <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        
      </div> */}
      {/* <div className=" z-50 sticky top-0 ">
        <div className="absolute">
         
          <Navbar />
        </div>
      </div> */}

      {children}
      <Footer />
    </section>
  );
};

export default PublicLayout;
