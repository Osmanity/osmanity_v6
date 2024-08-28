'use client';
import Checkmark from "@/components/Checkmark";
import Heading from '@/components/Heading/Heading';
import PostCard from '@/components/blog/PostCard';
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowLeftToLine, X } from "lucide-react";
import { getMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";

const mdxComponent = {
  Image,
  Checkmark,
};

// export async function generateStaticParams() {
//   return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
// }

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Calculate navbar height
const NAVBAR_HEIGHT = 100; // Update this with your actual navbar height

// Function to adjust scroll position
const adjustScrollPosition = () => {
  if (window.location.hash) {
    let hash = window.location.hash;
    // Check if the hash starts with #
    if (!hash.startsWith("#")) {
      // Add # symbol if it's missing
      hash = "#" + hash;
    }
    const element = document.querySelector(hash);
    if (element) {
      const offsetPosition = element.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};

const scrollToCommentSection = () => {
  const commentSection = document.getElementById("comment-section");
  if (commentSection) {
    const offsetPosition = commentSection.offsetTop - NAVBAR_HEIGHT;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};


const BlogContent = ({ post }) => {

  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  let MDXContent;

  if (!posts) return null;

  if (!post) {
    console.log("Post not found.")
  } else {
    MDXContent = getMDXComponent(post.body.code);
  }

  useEffect(() => {
    // Adjust scroll position on component mount
    adjustScrollPosition();

    // Listen for hash changes and adjust scroll position accordingly
    window.addEventListener("hashchange", adjustScrollPosition);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("hashchange", adjustScrollPosition);
    };
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showBackToTop, setShowBackToTop] = useState(false);

  // Event handler for "back to top" click
  const handleBackToTopClick = () => {
    scrollToTop();
  };

  // Function to check scroll position and toggle visibility of back to top button
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 1200) {
      setShowBackToTop(true); // Show back to top button when not at the top
    } else {
      setShowBackToTop(false); // Hide back to top button when at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scrollToCommentSection = () => {
  //   const commentSection = document.getElementById("comment-section");
  //   if (commentSection) {
  //     commentSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
          duration: 0.5
        }
      }}
      viewport={{ once: true }}
      className='pt-44 pb-20 lg:py-44 container px-4 mx-auto'
    >

      <div className='mx-auto max-w-4xl'>
        <div className='text-center mb-16 max-w-4xl mx-auto'>
          <Heading
            className="text-slate-900 dark:text-white text-center text-4xl/none lg:text-6xl/none font-medium "
            title={post.title}
            subTitle="blog"
          />
          {/* <h1 className='text-slate-900 text-center text-4xl/none lg:text-6xl/none font-medium'>{post.title}</h1> */}
          
          <p className='text-slate-500 mt-10'>
            <span className='inline-flex space-x-2'>
              <span>{format(parseISO(post.date), "LLL d, yyyy") }</span>
              <span>•</span>
              <span>{ post.author }</span>
            </span>

            <span className='ml-2 mr-2'>•</span>

            {post.categories?.map((category, index) => (
              <Link href={`/blog/categories/${slugify(category.title)}`} key={category.title} className='font-medium'>
                #{category.title}
                {index < post.categories.length - 1 ? `, ` : `` }
              </Link>
            ))}
          </p>
        </div>
        <div className='mb-16'>
          <Image src={post.image} width={1065} height={644} alt={post.title} className='object-cover object-top' />
        </div>

        {/* <article className='prose dark:text-white mx-auto max-w-2xl'>
          <MDXContent />
        </article> */}

<div className="flex gap-3 ">
          <div className="overflow-x-auto sm:overflow-hidden mx-auto">
            <article className="prose mx-auto max-w-2xl">
              

              <article className="prose dark:text-white mx-auto max-w-2xl">
                <div
                  className="prose 
          prose-blockquote:bg-purple-600/10 
          prose-blockquote:p-2
          prose-blockquote:px-6
          prose-blockquote:border-purple-600
          prose-blockquote:not-italic
          prose-blockquote:rounded-r-lg
      
          prose-li:marker:text-purple-600
      
          dark:prose-invert
          dark:prose-blockquote:border-purple-600
          dark:prose-blockquote:bg-purple-600/20
          dark:prose-li:marker:text-purple-600
      
          first-letter:text-3xl
          sm:first-letter:text-5xl"
                >
                  <MDXContent components={mdxComponent} />
                </div>
                <style jsx global>{`
                  .dark :global(article h1),
                  .dark :global(article h2),
                  .dark :global(article h3),
                  .dark :global(article h4),
                  .dark :global(article h5),
                  .dark :global(article h6) {
                    color: white; /* Set the color to white in dark mode */
                  }
                `}</style>
              </article>
            </article>{" "}
          </div>
          <details
            className={` lg:block hidden border-[1px] border-solid bg-white/80 dark:bg-black border-dark dark:border-light text-dark dark:text-light p-4 sticky top-[84px] max-h-[70vh] min-w-[20vw] overflow-hidden overflow-y-auto ${
              isClicked
                ? "sm:-mr-[62px] opacity-20 hover:opacity-100 min-w-[2vw]"
                : ""
            }`}
            open
          >
            <summary
              className={`text-lg font-semibold capitalize cursor-pointer relative  ${
                isClicked ? "[writing-mode:vertical-lr]  " : ""
              }`}
              onClick={handleClick}
            >
              {/* Table Of Content */}

              <span className="mr-8">On this Blog</span>
              <X
                className={`hover:opacity-70 absolute top-0.5 right-0 ${
                  isClicked ? "hidden" : "flex"
                }`}
              />
              {/* <ArrowRightToLine
                className={`hover:opacity-70 absolute top-0.5 right-0 ${
                  isClicked ? "hidden" : "flex"
                }`}
              /> */}
              <ArrowLeftToLine
                className={`hover:opacity-70 absolute -bottom-[420px] right-0 ${
                  isClicked ? "flex" : "hidden"
                }`}
              />
            </summary>
            <div className="max-h-[60vh] overflow-y-auto border-t-[1px]  border-black/40 dark:border-white/40">
              <ul
                className="mt-4 font-in text-sm"
                style={{ listStyleType: "none" }}
              >
                {post.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0  data-[level=two]:pt-2 data-[level=three]:pl-4 sm:data-[level=three]:pl-5 flex items-center justify-start"
                      >
                        {/* {heading.level === "three" ? (
                  <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                    &nbsp;
                  </span>
                ) : null} */}

                        <span className="hover:underline  ">
                          {heading.text}
                        </span>
                        {/* <span className="relative inline-block hover:after:bg-purple-700 hover:after:block hover:after:content-underline hover:after:h-[2px] hover:after:absolute hover:after:left-0 hover:after:w-full hover:after:-bottom-[0.25em] ">
                          {heading.text}
                        </span> */}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p
              className="mt-2 font-bold  cursor-pointer hover:underline"
              onClick={() => scrollToCommentSection()}
            >
              Comment Section
            </p>
          </details>

          {/* "Back to top" section */}
          {showBackToTop && (
            <>
              {/* desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                onClick={handleBackToTopClick}
                className="z-40  sm:flex hidden bg-white dark:bg-black cursor-pointer fixed bottom-10 left-10 border-[1px] px-4 py-2 border-solid border-dark/70 dark:border-light/30 hover:dark:border-light text-dark/70 dark:text-light/30 hover:dark:text-light p-3 "
              >
                Back to Top
              </motion.div>
              {/* mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                onClick={handleBackToTopClick}
                className="z-40 flex sm:hidden  bg-white dark:bg-black cursor-pointer fixed bottom-0 left-0 right-0 border-[1px] px-4 py-2 border-solid border-dark/70 dark:border-light/30 hover:dark:border-light text-dark/70 dark:text-light/30 hover:dark:text-light p-3 "
              >
                Back to Top
              </motion.div>
            </>
          )}
        </div>
        <div
          id="comment-section"
          className="mt-10 border-[1px] bg-white dark:bg-black border-solid border-dark dark:border-light text-dark dark:text-light p-4"
        >
          commment section
        </div>


        <div className='max-w-4xl mx-auto mt-20 lg:mt-32'>
          <h2 className='text-2xl text-gray-700 dark:text-white mb-10'>More Blog Posts</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {posts.filter((a) => post.title !== a.title)
              .map((item, idx) => {
                if (idx > 2) return null;
                return <PostCard key={idx} index={idx} post={item} />
              })}
          </div>

          <div className='flex justify-center mt-10'>
            <Link href="/blog" className='transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-violet-600 py-4 px-5 text-white hover:bg-white hover:text-violet-600 hover:shadow-2xl'> View All Blog Posts
            </Link>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default BlogContent