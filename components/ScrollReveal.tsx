"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ScrollReveal.module.css";

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${styles.reveal} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
