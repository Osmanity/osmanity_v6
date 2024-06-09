import Link from "next/link";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blogCategories/web-development"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Web-dev
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Frontend
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Backend
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Artificial Intelligence
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Mobile-dev
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        3D
      </Link>
      <Link
        href="/blogCategories/all"
        className={`${styles.categoryItem} ${styles.all}`}
      >
        <p className="text-[14px] tracking-[1px] uppercase border-b-2  inline-block border-violet-600">
          All-Categories
        </p>
      </Link>
    </div>
  );
};

export default MenuCategories;
