import styles from "./HelpCenter.module.css";

const HelpCenter = () => {
  return (
    <section id="help" className={styles.helpCenter}>
      <div className={styles.container}>
        <div className={styles.fhelpGrid}>
          <div className={styles.fhelpIntro}>
            <div className={styles.eyebrow}>SUPPORT</div>
            <h2 className={styles.title}>How Can We <em>Help?</em></h2>
            <p className={styles.subtitle}>
              Our dedicated support team and extensive documentation are here to help you get the most out of Finzo.
            </p>
          </div>

          <div className={styles.fhelpCards}>
            <div className={styles.fhc}>
              <div className={styles.fhcIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/></svg>
              </div>
              <h4>100% Privacy</h4>
              <p>Your financial data never leaves your device. We use local storage to ensure your information stays yours.</p>
            </div>
            <div className={styles.fhc}>
              <div className={styles.fhcIcon}>
                <svg viewBox="0 0 24 24"><path d="M11 20V12H7L13 2V10H17L11 20Z"/></svg>
              </div>
              <h4>Local-First Speed</h4>
              <p>No cloud syncing means zero lag. Access and manage your expenses instantly, anywhere, even without internet.</p>
            </div>
            <div className={styles.fhc}>
              <div className={styles.fhcIcon}>
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <h4>Get in Touch</h4>
              <p>Have questions or feedback? We'd love to hear from you. Reach out to us at <a href="mailto:fynux.bussiness@gmail.com" className={styles.mailLink}>fynux.bussiness@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
