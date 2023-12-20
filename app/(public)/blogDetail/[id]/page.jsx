import Image from "next/image";

const page = ({ params, searchParams }) => {
  const post = searchParams;
  return (
    <div className="py-10 bg-cover pt-36 pb-28 text-white ">
        
        
      <div
        className="mx-auto max-w-[1400px] md:w-[90%] bg-cover relative "
        style={{
            backgroundImage: `url(${post.image_url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
      ><div className="absolute top-0 bg-black/40 w-full h-full" />
        <div className="relative p-10 flex justify-center flex-col w-full items-center">
          <span className="bg-[#763ec6] px-2 text-gray-50 rounded-full">
            {post.tags}
          </span>
          <p className="text-3xl font-bold text-gray-50 mt-6">
            {post.title}
          </p>
          <div className="w-full flex flex-col justify-center items-center gap-4 text-gray-50">
        

           
            <div className="flex flex-col gap-1 text-center font-bold">
              <span>{post.authorName}</span>
              <span>{post.publishDate}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper mt-10 text-gray-900 dark:text-gray-50 flex flex-col gap-5">
        <p>{post.paragraph}</p>
        <p>{post.paragraph}</p>
        <p>{post.paragraph}</p>
        <p>{post.paragraph}</p>
      </div>
    </div>
  );
};

export default page;
