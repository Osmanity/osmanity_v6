"use client";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

import { motion } from "framer-motion";
import BlogSidebar from "../BlogSidebar/BlogSidebar";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((post, index) => {
          index *= 0.05;
          return (
            <motion.div
              className=" bg-white dark:bg-black  dark:border-1 border border-white/30 shadow-sm dark:shadow-none dark:shadow-white  relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index, duration: 0.3 },
              }}
              viewport={{ once: true }}
              key={post.title}
            >
              <Link href={post.url} className="relative block overflow-hidden">
                <Image
                  src={post.image}
                  alt="joefreycodes.com"
                  width={1064}
                  height={644}
                  className="object-cover object-center h-[200px] duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                />
              </Link>
              <div className="p-8">
                <div className="h-32">
                  <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
                    {format(parseISO(post.date), "LLL d, yyyy")} • {post.author}
                  </p>
                  <h3 className="mb-4">
                    <Link href={post.url} className="text-lg leading-none ">
                      {post.title}
                    </Link>
                  </h3>
                </div>
                <p>
                  <Link
                    href={post.url}
                    className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-violet-600"
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

const Posts = ({ className, itemsPerPage, archive = false, params }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setclickPaginate] = useState(false);
  const ref = useRef(null);

  let items = null;
  if (archive === false) {
    items = allPosts.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date)),
    );
  } else {
    if (params?.slug) {
      items = allPosts.filter((post) =>
        post.categories.some(
          (category) =>
            category.title
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/[\s_-]+/g, "-")
              .replace(/^-+|-+$/g, "") === params.slug,
        ),
      );
    }
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
    // fix this doesnt behave as exacpted fix it later
    if (clickPaginate === true) {
      setTimeout(function () {
        ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 300);
      setclickPaginate(false);
    }
  }, [
    setCurrentItems,
    setPageCount,
    setclickPaginate,
    itemOffset,
    itemsPerPage,
    clickPaginate,
    ref,
  ]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setclickPaginate(true);
    setItemOffset(newOffset);
  };

  if (!items) return null;

  return (
    <section className={`${className}`} ref={ref}>
      <div className="flex justify-center xl:justify-end">
        <div className="container px-4 mx-auto">
          {/* className had lg:w-10/12" */}
          <div className="lg:w-12/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Items currentItems={currentItems} />
          </div>
        </div>
        <BlogSidebar />
      </div>
      <div className="lg:w-10/12 mx-auto flex flex-wrap pr-10">
        <ReactPaginate
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="Back"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  );
};

export default Posts;
