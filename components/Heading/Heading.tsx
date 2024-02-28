"use client";
import { motion, Variants } from "framer-motion";

interface Heading {
  title: string;
  subTitle: string;
}

interface HeadingProps {
  className?: string;
  title?: string;
  subTitle?: string;
}

const aboutContent: { heading: Heading } = {
  heading: {
    title: "Blueprinting Tomorrow's Landscape Today",
    subTitle: "About Us",
  },
};

const Heading: React.FC<HeadingProps> = ({ className, title, subTitle }) => {
  const defaultTitle = aboutContent.heading.title;
  const defaultSubTitle = aboutContent.heading.subTitle;

  const titleText = title || defaultTitle;
  const subTitleText = subTitle || defaultSubTitle;

  const headingVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.03,
        duration: 0.5,
      },
    },
  };

  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between">
          <div className="text-center lg:max-w-3xl mx-auto">
            {subTitleText && (
              <motion.span
                variants={headingVariants}
                initial="initial"
                animate="whileInView"
                className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500"
              >
                {subTitleText}
              </motion.span>
            )}

            {titleText && (
              <motion.h1
                variants={headingVariants}
                initial="initial"
                animate="whileInView"
                className="text-3xl sm:text-4xl md:text-5xl"
              >
                {titleText}
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heading;
