import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import HowItWorks from "@/components/HowItWorks";
import HelpCenter from "@/components/HelpCenter";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ScrollReveal><Features /></ScrollReveal>
      <ScrollReveal><Screenshots /></ScrollReveal>
      <ScrollReveal><HowItWorks /></ScrollReveal>
      <ScrollReveal><HelpCenter /></ScrollReveal>
      <ScrollReveal><DownloadCTA /></ScrollReveal>
      <Footer />
    </main>
  );
}
