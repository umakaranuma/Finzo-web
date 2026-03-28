import styles from "./Marquee.module.css";

const Marquee = () => {
  const items = [
    "EXPENSE TRACKING",
    "SMART NOTES",
    "TODO LISTS",
    "REMINDERS",
    "BUDGET PLANNING",
    "100% OFFLINE",
    "DARK MODE",
    "SECURE DATA",
  ];

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className={styles.item}>
            <span>{item}</span>
            <div className={styles.dot}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
