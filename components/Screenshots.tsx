"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./Screenshots.module.css";

const lightScreens = [
  { id: "01", src: "/images/screen_1.jpg", label: "Stats Overview" },
  { id: "02", src: "/images/screen_2.jpg", label: "Advanced Filters" },
  { id: "03", src: "/images/screen_3.jpg", label: "App Menu" },
  { id: "04", src: "/images/screen_4.jpg", label: "New Transaction" },
  { id: "05", src: "/images/WhatsApp Image 2026-03-28 at 1.05.38 AM.jpeg", label: "Income Tracking" },
  { id: "06", src: "/images/WhatsApp Image 2026-03-28 at 1.05.39 AM (1).jpeg", label: "Detailed Analytics" }
];

const darkScreens = [
  { id: "01", src: "/images/screen_6.jpg", label: "Dark Stats Overview" },
  { id: "02", src: "/images/screen_5.jpg", label: "Dark App Menu" },
  { id: "03", src: "/images/WhatsApp Image 2026-03-28 at 1.05.44 AM (1).jpeg", label: "Dark Filter Screen" },
  { id: "04", src: "/images/WhatsApp Image 2026-03-28 at 1.05.41 AM (2).jpeg", label: "Dark Categories View" },
  { id: "05", src: "/images/WhatsApp Image 2026-03-28 at 1.05.43 AM (1).jpeg", label: "Dark Account Manager" },
  { id: "06", src: "/images/WhatsApp Image 2026-03-28 at 1.05.44 AM.jpeg", label: "Dark Detailed Overview" }
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
