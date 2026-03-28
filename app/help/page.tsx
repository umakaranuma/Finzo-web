import HelpCenter from "@/components/HelpCenter";
import styles from "../page.module.css";

export default function HelpPage() {
  return (
    <main className={styles.main} style={{ paddingTop: '80px' }}>
      <HelpCenter />
    </main>
  );
}
