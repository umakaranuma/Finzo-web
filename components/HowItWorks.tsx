import styles from "./HowItWorks.module.css";

const steps = [
  { num: "01", title: "Download App", text: "Get Finzo from the Play Store and set up your account in seconds." },
  { num: "02", title: "Add Transactions", text: "Securely enter your daily expenses or income manually with ease." },
  { num: "03", title: "Stay Focused", text: "Manage notes, todos, and reminders to keep your life on track." }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.fheader}>
          <div className={styles.eyebrow}>WORKFLOW</div>
          <h2 className={styles.title}>How it <em>Works</em></h2>
          <p className={styles.subtitle}>Three simple steps to financial freedom and organized life.</p>
        </div>

        <div className={styles.fhowCnt}>
          <div className={styles.fstepsConn}>
            <div className={styles.fconnLine}></div>
            <div className={styles.fconnLine}></div>
          </div>
          
          {steps.map((s, i) => (
            <div key={i} className={styles.howItem}>
              <div className={styles.fstepNum}>{s.num}</div>
              <div className={styles.fstepInfo}>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
