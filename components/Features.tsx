import styles from "./Features.module.css";

const features = [
  {
    title: "Money Manager",
    description: "Track your income and expenses with ease. Get detailed insights into your spending habits.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10-4.48 10-10S17.52,2 12,2zm0,18c-4.41,0-8-3.59-8-8s3.59-8 8-8 8,3.59 8,8-3.59,8-8,8zm.31-8.86c-1.77,-0.45 -2.34,-0.94 -2.34,-1.67 0,-0.84 0.79,-1.39 2.1,-1.39 1.47,0 2.01,0.59 2.1,1.58h1.39c-0.11,-1.56 -1.11,-2.55 -2.55,-2.87V5.5h-2v1.26c-1.24,0.26 -2.42,1.07 -2.42,2.73 0,1.79 1.49,2.69 3.66,3.21 1.95,0.46 2.34,1.15 2.34,1.87 0,0.53 -0.36,1.39 -2.15,1.39 -1.49,0 -2.22,-0.75 -2.32,-1.58H8.39c0.1,1.92 1.55,2.75 2.93,3.07V18.5h2v-1.27c1.53,-0.19 2.85,-1.07 2.85,-2.72 0,-2.11 -1.89,-2.72 -3.86,-3.37z" /></svg>
    )
  },
  {
    title: "Smart Notes",
    description: "Capture your ideas and important information instantly. Organize with tags and categories.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M18,20H6V4H13V9H18V20M16,11H8V13H16V11M16,15H8V17H16V15Z" /></svg>
    )
  },
  {
    title: "Todo List",
    description: "Stay on top of your tasks. Create checklists, set priorities, and never miss a deadline.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.89,21 5,19H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17.99,9L16.58,7.58L9.99,14.17L7.41,11.59L5.99,13L9.99,17L17.99,9Z" /></svg>
    )
  },
  {
    title: "Reminders",
    description: "Get notified for your bills, appointments and important events. Customizable alerts.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12,22C13.1,22 14,21.1 14,20H10C10,21.1 10.9,22 12,22M18,16V11C18,7.93 16.36,5.36 13.5,4.68V4C13.5,3.17 12.83,2.5 12,2.5C11.17,2.5 10.5,3.17 10.5,4V4.68C7.63,5.36 6,7.92 6,11V16L4,18V19H20V18L18,16M16,17H8V11C8,8.52 9.79,6.5 12,6.5C14.21,6.5 16,8.52 16,11V17Z" /></svg>
    )
  }
];

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.header}>
        <span className={styles.tag}>Features</span>
        <h2 className={styles.title}>Unified <em>Productivity</em></h2>
        <p className={styles.subtitle}>
          Stop switching between apps. Finzo brings everything you need to manage your life into one beautiful interface.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feat, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.ico}>{feat.icon}</div>
            <h3 className={styles.cardTitle}>{feat.title}</h3>
            <p className={styles.cardDesc}>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
