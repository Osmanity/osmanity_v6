import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./menu.module.css";
import MenuCategories from "./menuCategories/MenuCategories";
import MenuPosts from "./menuPosts/MenuPosts";
const BlogSidebar = () => {
  return (
    // <div className={styles.container}>
    <motion.div
      className="hidden xl:flex flex-col w-2/5  2xl:w-[580px] 3xl:w-[700px] z-20  mt-2 pl-6 "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.05, duration: 0.3 },
      }}
      viewport={{ once: true }}
    >
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <Link href={"/blogCategories/all"} className="text-lg leading-none">
        <h1 className={styles.title}>Categories</h1>
      </Link>
      <MenuCategories />
      {/* <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1> */}
      {/* <MenuPosts withImage={true} /> */}
    </motion.div>
  );
};

export default BlogSidebar;
