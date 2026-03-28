import type { Metadata } from "next";
import { Lexend, Barlow } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Finzo — Smart Personal Money Manager",
  description: "Track your expenses, manage notes, todos and reminders all in one place.",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${barlow.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
