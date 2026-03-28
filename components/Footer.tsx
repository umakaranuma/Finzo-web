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
                <svg viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
              </div>
              <span>Finzo</span>
            </Link>
            <p className={styles.ftagline}>
              The ultimate companion for your financial journey. Simple, secure, and offline.
            </p>
            <div className={styles.fsocials}>
              <a href="#" className={styles.fsc}>Fb</a>
              <a href="#" className={styles.fsc}>Tw</a>
              <a href="#" className={styles.fsc}>Ig</a>
              <a href="#" className={styles.fsc}>Li</a>
            </div>
          </div>

          <div className={styles.fnavCols}>
            <div className={styles.fcol}>
              <h4>App</h4>
              <Link href="#features">Features</Link>
              <Link href="#screenshots">Gallery</Link>
              <Link href="#how-it-works">Workflow</Link>
              <Link href="#help">Support</Link>
            </div>
            <div className={styles.fcol}>
              <h4>Company</h4>
              <Link href="#">About Us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press Kit</Link>
              <Link href="#">Contact</Link>
            </div>
            <div className={styles.fcol}>
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Cookie Policy</Link>
              <Link href="#">Security</Link>
            </div>
          </div>
        </div>

        <div className={styles.fbottom}>
          <div className={styles.fcopy}>
            &copy; {new Date().getFullYear()} Finzo. All rights reserved.
          </div>
          <div className={styles.fextra}>
            <span>Made with ❤️ for Financially Savvy People.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
