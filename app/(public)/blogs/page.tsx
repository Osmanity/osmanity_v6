"use client";
import BlogSidebar from "@/components/BlogSidebar/BlogSidebar";
import Image from "next/image";
import Link from "next/link";
import { posts } from "../../../constants/posts";
import styles from "../homepage.module.css";

const Hero = () => {
  const featuredPost = posts.filter((post) => post.featured === true);
  const topPosts = featuredPost.slice(0, 2);
  const bottomPost = featuredPost.slice(2, 5);
  return (
    <section className="py-40 pt-28 pb-28 ">
      <div className="text-center space-y-2 pb-6 relative z-10">
        <h1 className="text-6xl font-bold ">
          <span className="fancy-text">Blog</span>
        </h1>
        <div className="-space-y-1">
          <h2 className="text-3xl sm:text-4xl font-bold ">
            Crafting Digital Magic
          </h2>

          <p className="text-xl font-bold dark:text-white/70 text-black/70">
            Fullstack Developer Stories
          </p>
        </div>
      </div>
      <div className="z-10">
        <div className={styles.content}>
          <div className="mx-auto max-w-[1400px] bg-cover relative z-10  ">
            <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-x-0 md:gap-x-6 gap-5">
              {topPosts.map((post, index) => (
                <div
                  key={index}
                  className="md:px-0 md:col-span-2 lg:col-span-3 overflow-hidden rounded-xl shadow gradientBg"
                >
                  <div className="p-1">
                    <Link
                      href={{
                        pathname: `blogDetail/${post.id}`,
                        query: { ...post },
                      }}
                    >
                      <div className="relative overflow-hidden w-full rounded-2xl">
                        <div className="absolute h-full w-full bg-black/20" />
                        <div className="absolute p-5 w-full h-full">
                          <div className="flex flex-col justify-between h-full">
                            <div>
                              <h2 className="text-white text-3xl font-bold mb-2 px-1">
                                {post.title}
                              </h2>
                              <span className="text-gray-50 bg-[#763ec6] rounded-full px-2 py-0.5">
                                {post.tags}
                              </span>
                            </div>
                            <div className="text-white font-bold text-sm flex flex-col gap-1">
                              <span>{post.publishDate}</span>
                            </div>
                          </div>
                        </div>
                        <Image
                          src={post.image_url}
                          alt="blog picture"
                          className="w-full h-full object-cover rounded-"
                          height={400}
                          width={400}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-6 mt-6 gap-5">
              {bottomPost.map((post, index) => (
                <div
                  key={index}
                  className="md:px-0 relative rounded-sm overflow-hidden shadow gradientBg"
                >
                  <div className="p-1">
                    <Link
                      href={{
                        pathname: `blogDetail/${post.id}`,
                        query: { ...post },
                      }}
                    >
                      <div className="relative overflow-hidden w-full rounded-2xl">
                        <div className="absolute h-full w-full bg-black/20" />
                        <div className="absolute p-5 w-full h-full">
                          <div className="flex flex-col justify-between h-full">
                            <div>
                              <h2 className="text-white text-3xl font-bold mb-2 px-1">
                                {post.title}
                              </h2>
                              <span className="text-gray-50 bg-[#763ec6] rounded-full px-2 py-0.5">
                                {post.tags}
                              </span>
                            </div>
                            <div className="text-white font-bold text-sm flex flex-col gap-1">
                              <span>{post.publishDate}</span>
                            </div>
                          </div>
                        </div>
                        <Image
                          src={post.image_url}
                          alt="blog picture"
                          className="w-full h-full object-cover"
                          height={400}
                          width={400}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
