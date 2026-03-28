"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./Screenshots.module.css";

const lightScreens = [
  { id: "01", src: "/images/WhatsApp Image 2026-03-28 at 1.05.38 AM.jpeg", label: "Transactions" },
  { id: "02", src: "/images/WhatsApp Image 2026-03-28 at 1.05.39 AM (1).jpeg", label: "Analytics" },
  { id: "03", src: "/images/WhatsApp Image 2026-03-28 at 1.05.39 AM (2).jpeg", label: "Accounts" },
  { id: "04", src: "/images/WhatsApp Image 2026-03-28 at 1.05.40 AM (1).jpeg", label: "Security" },
  { id: "05", src: "/images/WhatsApp Image 2026-03-28 at 1.05.41 AM (1).jpeg", label: "Manage" },
  { id: "06", src: "/images/WhatsApp Image 2026-03-28 at 1.05.42 AM (1).jpeg", label: "Add New" }
];

const darkScreens = [
  { id: "01", src: "/images/WhatsApp Image 2026-03-28 at 1.05.40 AM (2).jpeg", label: "Transactions" },
  { id: "02", src: "/images/WhatsApp Image 2026-03-28 at 1.05.41 AM (2).jpeg", label: "Analytics" },
  { id: "03", src: "/images/WhatsApp Image 2026-03-28 at 1.05.43 AM (1).jpeg", label: "Accounts" },
  { id: "04", src: "/images/WhatsApp Image 2026-03-28 at 1.05.44 AM (1).jpeg", label: "Filters" },
  { id: "05", src: "/images/WhatsApp Image 2026-03-28 at 1.05.44 AM.jpeg", label: "Entries" },
  { id: "06", src: "/images/screen_3.jpg", label: "Notes" }
];

const Screenshots = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const screens = theme === "light" ? lightScreens : darkScreens;

  return (
    <section id="screenshots" className={styles.screenshots}>
      <div className={styles.container}>
        <div className={styles.fswHeader}>
          <div className={styles.fswLeft}>
            <div className={styles.eyebrow}>GALLERY</div>
            <h2 className={styles.title}>The Real Finzo,<br />In Every Detail</h2>
          </div>
          
          <div className={styles.fswRight}>
            <div className={styles.fswPill}>
              <button 
                className={`${styles.fswBtn} ${theme === "light" ? styles.active : ""}`}
                onClick={() => setTheme("light")}
              >
                Light
              </button>
              <button 
                className={`${styles.fswBtn} ${theme === "dark" ? styles.active : ""}`}
                onClick={() => setTheme("dark")}
              >
                Dark
              </button>
            </div>
          </div>
        </div>

        <div className={styles.fconnBx}>
          <div className={styles.fconn}></div>
        </div>

        <div className={styles.fphonesGrd}>
          {screens.map((s) => (
            <div key={s.id} className={styles.fphoneCard}>
              <div className={styles.fphoneWrap}>
                <Image 
                  src={s.src} 
                  alt={s.label} 
                  width={220} 
                  height={460}
                  className={styles.fphoneImg}
                />
              </div>
              <div className={styles.fphoneInfo}>
                <span className={styles.fphoneIdx}>{s.id}</span>
                <p className={styles.fphoneLabel}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
