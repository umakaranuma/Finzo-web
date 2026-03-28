import styles from "./HelpCenter.module.css";
import Image from "next/image";

const items = [
  { title: "Documentation", sub: "Explore our detailed guides." },
  { title: "Support Center", sub: "Get help from our team." },
  { title: "Community", sub: "Join our active user base." }
];

const HelpCenter = () => {
  return (
    <section id="help" className={styles.sec}>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <span className={styles.tag}>Support</span>
          <h2 className={styles.title}>Need <em>Help?</em></h2>
          <p className={styles.subtitle}>
            Our dedicated support team and extensive documentation are here to help you get the most out of Finzo.
          </p>
          
          <div className={styles.visual}>
            {items.map((item, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.itemIco}>
                  <svg viewBox="0 0 24 24"><path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10-4.48 10-10S17.52,2 12,2zm1,15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                </div>
                <div className={styles.itemText}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemSub}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.ctaBtn}>
            <svg viewBox="0 0 24 24"><path d="M20,2H4C2.9,2 2,2.9 2,4V22L6,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2Z" /></svg>
            Contact Support
          </button>
        </div>

        <div className={styles.imageCol}>
           <Image 
              src="/images/launcher_icon.jpg" 
              alt="Finzo App Icon" 
              width={300} 
              height={300} 
              className={styles.brandIcon}
           />
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
