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
                <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              </div>
              <h4>Documentation</h4>
              <p>Explore our detailed guides and tutorials to master every feature.</p>
            </div>
            <div className={styles.fhc}>
              <div className={styles.fhcIcon}>
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
              </div>
              <h4>Community</h4>
              <p>Join our active user base to share tips and get inspired.</p>
            </div>
          </div>
        </div>

        <div className={styles.fhelpBox}>
          <div className={styles.fhbLeft}>
            <h3>Ready to get started?</h3>
            <p>Download Finzo today and take control of your financial future. It's free, secure, and easy to use.</p>
          </div>
          <div className={styles.fhbRight}>
            <a href="https://play.google.com/store" className={styles.fhbBtn}>
              Go To Help Center
              <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
