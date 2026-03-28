import Link from "next/link";
import styles from "../legal.module.css";

export default function PrivacyPage() {
  return (
    <div className={styles.legalWrapper}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Home
        </Link>
        
        <h1 className={styles.title}>Privacy Policy</h1>
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>Finzo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.</p>
          </section>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            <p>We do not collect or gather any user data. All information you enter in the application, including:</p>
            <ul>
              <li>Transaction data (amounts, categories, dates)</li>
              <li>Account information</li>
              <li>Notes and todos</li>
              <li>Category preferences</li>
              <li>App settings and preferences</li>
            </ul>
            <p>is stored exclusively on your device using local storage. We do not have any backend servers, and no data is transmitted to external servers. Your data remains completely private and under your control.</p>
          </section>

          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <p>Since all data is stored locally on your device, we do not have access to your information. The application uses your locally stored data to:</p>
            <ul>
              <li>Provide and maintain the service on your device</li>
              <li>Display your transactions and financial data</li>
              <li>Send you local notifications (if enabled)</li>
            </ul>
            <p>No data is transmitted to external servers or third parties.</p>
          </section>

          <section className={styles.section}>
            <h2>Data Storage</h2>
            <p>All your financial data is stored exclusively on your device using local storage. We do not have any backend infrastructure, cloud services, or external servers. Your data never leaves your device and is not transmitted anywhere.</p>
            <p>You have complete control over your data and can delete it at any time through the app settings. Since all data is local, if you uninstall the app, all data will be removed from your device.</p>
          </section>

          <section className={styles.section}>
            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className={styles.section}>
            <h2>Third-Party Services</h2>
            <p>Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.</p>
          </section>

          <section className={styles.section}>
            <h2>Children's Privacy</h2>
            <p>Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section className={styles.section}>
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          </section>

          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p><strong>Email:</strong> fynux.bussiness@gmail.com</p>
            <p>Or through the Feedback section in the app.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
