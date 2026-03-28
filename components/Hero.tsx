import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.fnavLine}></div>
      
      <div className={styles.fheadBigBx}>
        <div className={styles.fheadBig}>FINZO</div>
      </div>

      <div className={styles.rings}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
      </div>

      <div className={styles.left}>
        <div className={styles.eyebrow}>
          <div className={styles.eyebrowDot}></div>
          <span>Available on Android</span>
        </div>
        
        <h1 className={styles.title}>
          Financial Mastery<br />
          <em>Redefined.</em><br />
          Smart Way.
        </h1>
        
        <p className={styles.subtitle}>
          Finzo is your all-in-one personal finance companion. Track every rupee, manage multiple accounts, analyse spending, handle todos, reminders and notes — all in one place.
        </p>

        <div className={styles.btns}>
          <Link href="https://play.google.com/store/apps/details?id=com.fynux.finzo&pcampaignid=web_share" className={styles.btnA}>
            <svg viewBox="0 0 24 24"><path d="M3.18 23.02c.27.15.58.22.9.22.32 0 .65-.09.94-.26l12.07-6.97-2.73-2.75-11.18 9.76zm-1.34-19.27C1.67 4.06 1.5 4.43 1.5 4.85v14.3c0 .42.17.79.34 1.1l.1.09 8.02-8.02v-.19L1.84 3.75zm17.26 7.87l-2.17-1.25-3.05 3.06 3.05 3.06 2.19-1.26c.62-.36.62-.95 0-1.31zm-14.02-9.6L17.15 7.99l-2.73 2.73L2.24 1.24c.29-.17.62-.27.9-.27.35 0 .64.06.94.05z"/></svg>
            Get it on Android
          </Link>
          <Link href="#features" className={styles.btnB}>
            Explore Features
          </Link>
        </div>

        <div className={styles.fheroStats}>
          <div className={styles.fstat}>
            <strong>FREE</strong>
            <span>TO DOWNLOAD</span>
          </div>
          <div className={styles.fstatSep}></div>
          <div className={styles.fstat}>
            <strong>LIGHT & DARK</strong>
            <span>THEME SUPPORT</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.fcardWrap}>
          <div className={`${styles.fcard} ${styles.fc1}`}>
            <div className={styles.fci}>
              <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
            </div>
            <div className={styles.fct}>
              <h5>$12,450.00</h5>
              <p>Total Balance</p>
            </div>
          </div>

          <div className={`${styles.fcard} ${styles.fc2}`}>
            <div className={styles.fci}>
              <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            </div>
            <div className={styles.fct}>
              <h5>Tasks</h5>
              <p>12 Pending Today</p>
            </div>
          </div>

          <div className={styles.imgWrap}>
            <Image 
              src="/images/Gemini_Generated_Image_8izssc8izssc8izs.png" 
              alt="Finzo App Preview" 
              width={400} 
              height={820}
              className={styles.mainImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
