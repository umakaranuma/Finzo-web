import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgOrb}></div>
      <div className={styles.bgOrb2}></div>
      <div className={styles.gridBg}></div>

      <div className={styles.left}>
        <div className={styles.eyebrow}>
          <div className={styles.eyebrowDot}></div>
          Available free on Google Play
        </div>
        
        <h1 className={styles.title}>
          Smart Money.<br />
          <em>Zero Stress.</em><br />
          One App.
        </h1>
        
        <p className={styles.subtitle}>
          Finzo is your all-in-one personal finance companion. Track every rupee, manage multiple accounts, analyse spending, handle todos, reminders and notes — all in one place.
        </p>

        <div className={styles.btns}>
          <Link href="https://play.google.com/store" className={styles.btnA}>
            <svg viewBox="0 0 24 24"><path d="M3.18 23.02c.27.15.58.22.9.22.32 0 .65-.09.94-.26l12.07-6.97-2.73-2.75-11.18 9.76zm-1.34-19.27C1.67 4.06 1.5 4.43 1.5 4.85v14.3c0 .42.17.79.34 1.1l.1.09 8.02-8.02v-.19L1.84 3.75zm17.26 7.87l-2.17-1.25-3.05 3.06 3.05 3.06 2.19-1.26c.62-.36.62-.95 0-1.31zm-14.02-9.6L17.15 7.99l-2.73 2.73L2.24 1.24c.29-.17.62-.27.9-.27.35 0 .64.06.94.05z"/></svg>
            Download Free
          </Link>
          <Link href="#screenshots" className={styles.btnB}>
            <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            See Screenshots
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>Free</span>
            <span className={styles.statLabel}>To download</span>
          </div>
          <div className={styles.statSep}></div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>Light & Dark</span>
            <span className={styles.statLabel}>Theme support</span>
          </div>
          <div className={styles.statSep}></div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>Offline</span>
            <span className={styles.statLabel}>Works always</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imgWrap}>
          <Image 
            src="/images/Gemini_Generated_Image_8izssc8izssc8izs.png" 
            alt="Finzo App Preview" 
            width={380} 
            height={780}
            className={styles.mainImg}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
