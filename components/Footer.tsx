import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ftop}>
          <div className={styles.flogoCol}>
            <Link href="/" className={styles.flogo}>
              <div className={styles.flogoImg}>
                <img src="/images/launcher_icon.jpg" alt="Finzo Logo" className={styles.ficonImg} />
              </div>
              <span>Finzo</span>
            </Link>
            <p className={styles.ftagline}>
              The ultimate companion for your financial journey. Simple, secure, and 100% offline. No cloud, no trackers, just you and your data.
            </p>
          </div>

          <div className={styles.fnavCols}>
            <div className={styles.fcol}>
              <h4>Navigation</h4>
              <Link href="/features">Features</Link>
              <Link href="/screenshots">Gallery</Link>
              <Link href="/how-it-works">Workflow</Link>
              <Link href="/help">Support Center</Link>
            </div>
            <div className={styles.fcol}>
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="#">Security Protocol</Link>
            </div>
          </div>
        </div>

        <div className={styles.fbottom}>
          <div className={styles.fcopy}>
            &copy; {new Date().getFullYear()} Finzo. All rights reserved.
          </div>
          <div className={styles.fextra}>
            <span>Crafted for privacy-conscious individuals.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
