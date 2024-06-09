"use client";
import { motion } from "framer-motion";
import { slug } from "github-slugger";
import Category from "./Category";

const Categories = ({ categories, currentSlug }) => {
  return (
    <>
      <motion.div
        className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.05, duration: 0.3 },
        }}
        viewport={{ once: true }}
      >
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{currentSlug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </motion.div>
      <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
        {categories.map((cat) => (
          <Category
            key={cat}
            link={`/blogCategories/${cat}`}
            name={cat}
            active={currentSlug === slug(cat)}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
