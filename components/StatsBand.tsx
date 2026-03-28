import styles from "./StatsBand.module.css";

const StatsBand = () => {
  const stats = [
    {
      num: "4.8",
      label: "User Rating",
      sub: "Average / 5.0",
      icon: <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    },
    {
      num: "50k+",
      label: "Downloads",
      sub: "Across Platforms",
      icon: <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
    },
    {
      num: "24/7",
      label: "Support",
      sub: "Always Available",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52,2 12,2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
    },
    {
      num: "100%",
      label: "Offline",
      sub: "No Net Required",
      icon: <svg viewBox="0 0 24 24"><path d="M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49L23.64 7z"/></svg>
    }
  ];

  return (
    <div className={styles.statsBand}>
      <div className={styles.container}>
        {stats.map((s, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.icoBx}>
              {s.icon}
            </div>
            <div className={styles.info}>
              <strong>{s.num}</strong>
              <div className={styles.txt}>
                <h5>{s.label}</h5>
                <p>{s.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBand;
