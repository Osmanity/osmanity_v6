import Link from "next/link";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
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
    </div>
  );
};

export default MenuCategories;
