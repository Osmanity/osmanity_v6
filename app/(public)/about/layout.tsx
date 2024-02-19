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
    <div className=" min-h-screen relative">
      <div className="z-50 sticky top-0 ">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      {/* <Suspense fallback={<Loading />}> */}
      <div className="relative flex flex-1 min-h-screen flex-col md:flex-row dark:bg-black dark:text-white bg-white text-black  rounded-lg mx-auto overflow-hidden">
        {/* {splineobj} */}
        {children}
      </div>
      {/* </Suspense> */}
      <Footer />
    </div>
  );
};

export default PublicLayout;
