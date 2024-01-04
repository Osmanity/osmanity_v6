// import { delay } from "@/lib/delay";
import Image from "next/image";

const page = async ({ searchParams }: { searchParams: any }) => {
  const post = searchParams;
  // await delay(5000);
  return (
    <div className="min-h-screen  bg-cover pt-36 pb-28 text-white relative z-10">
      <div
        className="rounded-3xl mx-auto max-w-[1400px] md:w-[90%] bg-cover relative z-10"
        style={{
          backgroundImage: `url(${post.image_url})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" absolute top-0 bg-black/40 w-full h-full" />
        <div className="relative p-10 flex justify-center flex-col w-full items-center">
          <span className="bg-[#763ec6] px-2 text-gray-50 rounded-full">
            {post.tags}
          </span>
          <p className="text-3xl font-bold text-gray-50 mt-6">{post.title}</p>
          <div className="w-full flex flex-col justify-center items-center gap-4 text-gray-50">
            <div className="rounded-full flex justify-center items-center w-[160px] h-[160px] bg-[#763ec6] mt-5">
              <Image
                src={post.authorImage}
                width={160}
                height={160}
                alt="author"
                className="rounded-full w-40 h-40 object-cover border-4 border-[#763ec6] "
              />
            </div>

            <div className="flex flex-col gap-1 text-center font-bold">
              <span>{post.authorName}</span>
              <span>{post.publishDate}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper mt-10 text-white flex flex-col gap-5 relative z-10">
        <p>{post.paragraph}</p>
        <p>{post.paragraph}</p>
        <p>{post.paragraph}</p>
        <p>{post.paragraph}</p>
      </div>
    </div>
  );
};

export default page;
