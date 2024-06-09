"use client";

import Heading from "@/components/Heading/Heading";
import Subscribe from "@/components/Home/Subscribe";
import Posts from "@/components/blog/Posts";
// import Posts from "@/components/blog/Posts";

// export const metadata = {
//   title: "Blogs - Osmanity by Ibrahim Osman",
// };

const page = () => {
  return (
    <>
      <Heading
        className="pt-36 sm:pt-52 pb-24"
        title="Recent Updates"
        subTitle="Our Blog"
      />
      {/* <div className="flex justify-center xl:justify-end"> */}
      <Posts className="pt-0 pb-24 xl:pl-5" itemsPerPage={9} />
      {/* <BlogSidebar /> */}
      {/* </div> */}
      <Subscribe className="py-16 pt-64 lg:py-32 bg-violet-600" />
    </>
  );
};

export default page;
