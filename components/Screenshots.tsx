"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./Screenshots.module.css";

const lightScreens = [
  { id: 1, src: "/images/WhatsApp Image 2026-03-28 at 1.05.38 AM.jpeg", label: "Transactions" },
  { id: 2, src: "/images/WhatsApp Image 2026-03-28 at 1.05.39 AM (1).jpeg", label: "Analytics" },
  { id: 3, src: "/images/WhatsApp Image 2026-03-28 at 1.05.39 AM (2).jpeg", label: "Accounts" },
  { id: 4, src: "/images/WhatsApp Image 2026-03-28 at 1.05.40 AM (1).jpeg", label: "Configuration" },
  { id: 5, src: "/images/WhatsApp Image 2026-03-28 at 1.05.41 AM (1).jpeg", label: "More" },
  { id: 6, src: "/images/WhatsApp Image 2026-03-28 at 1.05.42 AM (1).jpeg", label: "New Transaction" },
  { id: 7, src: "/images/screen_1.jpg", label: "Dashboard" },
  { id: 8, src: "/images/screen_2.jpg", label: "Smart Tools" }
];

const darkScreens = [
  { id: 1, src: "/images/WhatsApp Image 2026-03-28 at 1.05.40 AM (2).jpeg", label: "Transactions" },
  { id: 2, src: "/images/WhatsApp Image 2026-03-28 at 1.05.41 AM (2).jpeg", label: "Analytics" },
  { id: 3, src: "/images/WhatsApp Image 2026-03-28 at 1.05.43 AM (1).jpeg", label: "Accounts" },
  { id: 4, src: "/images/WhatsApp Image 2026-03-28 at 1.05.44 AM (1).jpeg", label: "Filters" },
  { id: 5, src: "/images/WhatsApp Image 2026-03-28 at 1.05.44 AM.jpeg", label: "New Entry" },
  { id: 6, src: "/images/screen_3.jpg", label: "Notes" },
  { id: 7, src: "/images/screen_4.jpg", label: "Todo List" },
  { id: 8, src: "/images/screen_5.jpg", label: "Settings" }
];

const Screenshots = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const screens = theme === "light" ? lightScreens : darkScreens;

  return (
    <section id="screenshots" className={styles.sec}>
      <div className={styles.top}>
        <div className={styles.topHeader}>
          <div>
            <span className={styles.tag}>Screenshots</span>
            <h2 className={styles.title}>The real Finzo,<br /><em>in every detail</em></h2>
            <p className={styles.subtitle}>
              Browse actual screenshots straight from the app. Click Dark to see exactly how the dark theme looks.
            </p>
          </div>
          <div className={styles.controls}>
            <p className={styles.controlLabel}>Preview theme:</p>
            <div className={styles.themeSwitch}>
              <button 
                className={`${styles.thBtn} ${theme === "light" ? styles.on : ""}`}
                onClick={() => setTheme("light")}
              >
                <svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-12.37l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.41 0l1.06-1.06a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0zM7.05 18.36l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.41 0l1.06-1.06a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0z"/></svg>
                Light
              </button>
              <button 
                className={`${styles.thBtn} ${theme === "dark" ? styles.on : ""}`}
                onClick={() => setTheme("dark")}
              >
                <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {screens.map((screen) => (
          <div key={screen.id} className={styles.card}>
            <Image 
              src={screen.src} 
              alt={screen.label} 
              width={280} 
              height={580} 
              className={styles.img}
            />
            <div className={styles.label}>{screen.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Screenshots;
