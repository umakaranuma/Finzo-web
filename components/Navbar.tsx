import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoBox}>
          <img src="/images/launcher_icon.jpg" alt="Finzo Logo" className={styles.lImg} />
        </div>
        <span className={styles.logoName}>Finzo</span>
      </Link>

      <ul className={styles.navLinks}>
        <li><Link href="#home" className={styles.on}>Home</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#how-it-works">How it works</Link></li>
        <li><Link href="#help">Help</Link></li>
      </ul>

      <div className={styles.right}>
        <a href="https://play.google.com/store/apps/details?id=com.fynux.finzo&pcampaignid=web_share" target="_blank" className={styles.navPill}>
          <svg viewBox="0 0 24 24">
            <path d="M3.18 23.02c.27.15.58.22.9.22.32 0 .65-.09.94-.26l12.07-6.97-2.73-2.75-11.18 9.76zm-1.34-19.27C1.67 4.06 1.5 4.43 1.5 4.85v14.3c0 .42.17.79.34 1.1l.1.09 8.02-8.02v-.19L1.84 3.75zm17.26 7.87l-2.17-1.25-3.05 3.06 3.05 3.06 2.19-1.26c.62-.36.62-.95 0-1.31zm-14.02-9.6L17.15 7.99l-2.73 2.73L2.24 1.24c.29-.17.62-.27.9-.27.35 0 .64.06.94.05z"/>
          </svg>
          Get on Android
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
