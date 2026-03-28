import styles from "./DownloadCTA.module.css";
import Link from "next/link";

const DownloadCTA = () => {
  return (
    <section className={styles.downloadCta}>
      <div className={styles.fctaBigBx}>
        <div className={styles.fctaBig}>DOWNLOAD</div>
      </div>
      
      <div className={styles.rings}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.eyebrow}>GET STARTED</div>
        <h2 className={styles.title}>Ready to transform your <em>financial life?</em></h2>
        <p className={styles.subtitle}>
          Join thousands of users who trust Finzo to manage their money, notes, and tasks every day.
        </p>

        <div className={styles.fctaBtns}>
          <Link href="https://play.google.com/store/apps/details?id=com.fynux.finzo&pcampaignid=web_share" className={styles.fctaBtnA}>
            <svg viewBox="0 0 24 24"><path d="M3.18 23.02c.27.15.58.22.9.22.32 0 .65-.09.94-.26l12.07-6.97-2.73-2.75-11.18 9.76zm-1.34-19.27C1.67 4.06 1.5 4.43 1.5 4.85v14.3c0 .42.17.79.34 1.1l.1.09 8.02-8.02v-.19L1.84 3.75zm17.26 7.87l-2.17-1.25-3.05 3.06 3.05 3.06 2.19-1.26c.62-.36.62-.95 0-1.31zm-14.02-9.6L17.15 7.99l-2.73 2.73L2.24 1.24c.29-.17.62-.27.9-.27.35 0 .64.06.94.05z"/></svg>
            Get it on Android
          </Link>
          <div className={styles.fctaBtnB}>
            <svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.76-3.27.82-1.31.05-2.32-1.32-3.15-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Coming App Store
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
