import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
        </div>
        <span className={styles.name}>Finzo</span>
      </Link>

      <div className={styles.links}>
        <Link href="#features">Features</Link>
        <Link href="#how-it-works">How it works</Link>
        <Link href="#help">Help Center</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} Finzo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
