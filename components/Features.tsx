import styles from "./Features.module.css";

const Features = () => {
  const smallFeatures = [
    {
      title: "Smart Money Manager",
      desc: "Track every transaction, manage multiple accounts, and visualize your spending habits with intuitive charts.",
      icon: <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>,
      num: "01"
    },
    {
      title: "Task & Todo Lists",
      desc: "Stay organized with powerful task management. Create checklists, set priorities, and get things done.",
      icon: <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>,
      num: "02"
    },
    {
      title: "Interactive Reminders",
      desc: "Never miss a bill payment or an important event. Set custom alerts that work for your schedule.",
      icon: <svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>,
      num: "03"
    },
    {
      title: "100% Offline & Private",
      desc: "Your data stays on your device. We don't have a backend, so your sensitive information never leaves your local storage.",
      icon: <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>,
      num: "04"
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.fheader}>
          <div className={styles.eyebrow}>FEATURES</div>
          <h2 className={styles.title}>All-in-one <em>Productivity</em></h2>
          <p className={styles.subtitle}>
            Finzo brings balance to your financial life. Manage money, tasks, and notes in one unified space designed for clarity.
          </p>
        </div>

        <div className={styles.fbigFeat}>
          <div className={styles.fbfLeft}>
            <div className={styles.fbfNum}>FEATURE 01</div>
            <h3>Deep Insights <br />Into Your Spending</h3>
            <p>Get a bird's eye view of where your money goes. Our advanced analytics break down your expenses into meaningful categories with stunning visualizations.</p>
            
            <div className={styles.fbfStats}>
              <div className={styles.fbfsItem}>
                <span>Daily Tracking</span>
                <div className={styles.fbfsBar}><div style={{width: '75%'}}></div></div>
              </div>
              <div className={styles.fbfsItem}>
                <span>Budget Alerts</span>
                <div className={styles.fbfsBar}><div style={{width: '90%'}}></div></div>
              </div>
            </div>
          </div>
          
          <div className={styles.fbfRight}>
            <div className={styles.fbfMock}>
              <div className={styles.fdonutBx}>
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="12" fill="none" />
                  <circle cx="50" cy="50" r="40" stroke="var(--or)" strokeWidth="12" fill="none" strokeDasharray="180 251" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="40" stroke="var(--or3)" strokeWidth="12" fill="none" strokeDasharray="60 251" transform="rotate(170 50 50)" />
                </svg>
                <div className={styles.fdonutCenter}>
                  <span>Total</span>
                  <strong>$2.4k</strong>
                </div>
              </div>
              <div className={styles.fmockLines}>
                <div className={styles.fml}></div>
                <div className={styles.fml}></div>
                <div className={styles.fml}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fsmallFeatsGrd}>
          {smallFeatures.map((f, i) => (
            <div key={i} className={styles.fsCard}>
              <div className={styles.fscTop}>
                <div className={styles.fscIcon}>{f.icon}</div>
                <div className={styles.fscNum}>{f.num}</div>
              </div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
