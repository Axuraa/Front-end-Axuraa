import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import ChatBot from "@/components/UI/Atoms/ChatBot/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axuraa",
  description: "project management agency",
  keywords: ["Axuraa", "project management agency", "Axuraa Agency"],
  // favicon: "/assets/favicon.ico",

  
};
export const dynamic = "force-dynamic";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`} >
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </div>
        <ChatBot />
      </body>
    </html>
  );
}
