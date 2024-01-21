import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.webdev}`}>Web-dev</span>
          <h3 className={styles.postTitle}>
            "Navigating the Future: Innovations in Web Development"
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ibrahim Osman</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.Frontend}`}>
            Frontend
          </span>
          <h3 className={styles.postTitle}>
            {" "}
            "Frontend Finesse: Crafting Beautiful User Experiences"
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ibrahim Osman</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.Backend}`}>
            Backend
          </span>
          <h3 className={styles.postTitle}> "ExpressJS just got better"</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ibrahim Osman</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.AI}`}>
            Artificial Intelligence
          </span>
          <h3 className={styles.postTitle}>
            "AI Unleashed: Transforming the Tech World"
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ibrahim Osman</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.Mobiledev}`}>
            Mobile-dev
          </span>
          <h3 className={styles.postTitle}>
            "The Revolution in Your Pocket: Mobile Development Trends"
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ibrahim Osman</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.model3D}`}>3D</span>
          <h3 className={styles.postTitle}>
            "3D Design: Shaping the World in New Dimensions"
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ibrahim Osman</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
