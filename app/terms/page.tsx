import Link from "next/link";
import styles from "../legal.module.css";

export default function TermsPage() {
  return (
    <div className={styles.legalWrapper}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Home
        </Link>
        
        <h1 className={styles.title}>Terms of Service</h1>
        
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Agreement to Terms</h2>
            <p>By accessing or using Finzo, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, then you may not access the service.</p>
          </section>

          <section className={styles.section}>
            <h2>Use License</h2>
            <p>Permission is granted to temporarily download one copy of Finzo for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software contained in Finzo</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>User Accounts</h2>
            <p>This application does not require user accounts or registration. All data is stored locally on your device, and you have full control over your information.</p>
          </section>

          <section className={styles.section}>
            <h2>Prohibited Uses</h2>
            <p>You may not use Finzo:</p>
            <ul>
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit any malicious code or viruses</li>
              <li>To attempt to gain unauthorized access to any portion of the service</li>
              <li>To interfere with or disrupt the service or servers</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>In-App Purchases</h2>
            <p>Finzo does not currently offer any Pro features or in-app purchases. No payment methods are implemented in this application. All features are available to all users at no cost.</p>
          </section>

          <section className={styles.section}>
            <h2>Disclaimer</h2>
            <p>The materials on Finzo are provided on an "as is" basis. Finzo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section className={styles.section}>
            <h2>Limitations</h2>
            <p>In no event shall Finzo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Finzo, even if Finzo or a Finzo authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          </section>

          <section className={styles.section}>
            <h2>Accuracy of Materials</h2>
            <p>The materials appearing in Finzo could include technical, typographical, or photographic errors. Finzo does not warrant that any of the materials on its app are accurate, complete, or current.</p>
          </section>

          <section className={styles.section}>
            <h2>Modifications</h2>
            <p>Finzo may revise these terms of service at any time without notice. By using this app you are agreeing to be bound by the then current version of these terms of service.</p>
          </section>

          <section className={styles.section}>
            <h2>Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.</p>
          </section>

          <div className={styles.contact}>
            <h3>Contact Information</h3>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p><strong>Email:</strong> fynux.bussiness@gmail.com</p>
            <p>Or through the Feedback section in the app.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
