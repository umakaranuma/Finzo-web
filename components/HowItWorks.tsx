import styles from "./HowItWorks.module.css";

const steps = [
  { num: "01", title: "Download App", text: "Get Finzo from the Play Store and set up your account in seconds." },
  { num: "02", title: "Link Accounts", text: "Securely connect your bank accounts or manually track your cash flow." },
  { num: "03", title: "Stay Organized", text: "Manage notes, todos, and reminders to keep your life on track." }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.sec}>
      <div className={styles.header}>
        <span className={styles.tag}>Workflow</span>
        <h2 className={styles.title}>How it <em>Works</em></h2>
        <p className={styles.subtitle}>Three simple steps to financial freedom and organized life.</p>
      </div>

      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={i} className={styles.step}>
            <div className={styles.stepNum}>{step.num}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
