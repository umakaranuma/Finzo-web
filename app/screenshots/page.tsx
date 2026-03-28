import Screenshots from "@/components/Screenshots";
import styles from "../page.module.css";

export default function ScreenshotsPage() {
  return (
    <main className={styles.main} style={{ paddingTop: '80px' }}>
      <Screenshots />
    </main>
  );
}
