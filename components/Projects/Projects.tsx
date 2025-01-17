"use client";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

interface Project {
  title: string;
  url: string;
  image: string;
  role: string;
  date: string;
}

const Items = ({ currentItems }: { currentItems: Project[] }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((project, index) => {
          index *= 0.05;
          return (
            <motion.div
              className="relative overflow-hidden w-full lg:w-6/12 p-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index, duration: 0.3 },
              }}
              viewport={{ once: true }}
              key={index}
            >
              <Link
                href={project.url}
                className="overflow-hidden block relative"
              >
                <Image
                  src={project.image}
                  alt="joefreycodes.com"
                  width={1064}
                  height={644}
                  className="object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                />
              </Link>
              <div className="py-8 px-2">
                <span className="block mb-1 text-gray-500">{project.role}</span>
                <h3 className="mb-4">
                  <Link href={project.url} className="text-2xl leading-none">
                    {project.title}
                  </Link>
                </h3>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

const Projects = ({
  className,
  itemsPerPage,
}: {
  className: string;
  itemsPerPage: number;
}) => {
  const items = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  const [currentItems, setCurrentItems] = useState<Project[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setclickPaginate] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));

    if (clickPaginate === true) {
      ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      setclickPaginate(false);
    }
  }, [itemOffset, itemsPerPage, clickPaginate, items]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setclickPaginate(true);
    setItemOffset(newOffset);
  };

  if (!items) return null;
  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:w-10/12 mx-auto flex flex-wrap mb-10">
          <Items currentItems={currentItems} />
        </div>

        <div className="lg:w-10/12 mx-auto flex flex-wrap">
          <ReactPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            pageClassName="page-item"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
