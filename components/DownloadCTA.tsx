import styles from "./DownloadCTA.module.css";
import Image from "next/image";
import Link from "next/link";

const DownloadCTA = () => {
  return (
    <section className={styles.sec}>
      <div className={styles.card}>
        <Image 
          src="/images/launcher_icon.jpg" 
          alt="Finzo Logo" 
          width={80} 
          height={80} 
          className={styles.appIcon}
        />
        <h2 className={styles.title}>Ready to transform your <em>financial life?</em></h2>
        <p className={styles.subtitle}>
          Join thousands of users who trust Finzo to manage their money, notes, and tasks every day.
        </p>

        <div className={styles.btns}>
          <Link href="https://play.google.com/store" className={styles.gplayBtn}>
            <div className={styles.gplayIcon}>
               <svg viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,16.19C19.28,16.55 19.49,17.33 19.13,17.95C18.97,18.23 18.72,18.45 18.43,18.57L14.75,20.69L4.85,22.44L14.41,12.88L14.77,13.08L16.81,15.12M14.77,10.92L14.41,11.12L4.85,1.56L14.75,3.31L18.43,5.43C18.72,5.55 18.97,5.77 19.13,6.05C19.49,6.67 19.28,7.45 18.66,7.81L16.81,8.88L14.77,10.92Z" /></svg>
            </div>
            <div className={styles.gplayText}>
              <div className={styles.gplayTop}>GET IT ON</div>
              <div className={styles.gplayMain}>Google Play</div>
            </div>
          </Link>
          <div className={styles.comingSoon}>
            Coming Soon to App Store
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
