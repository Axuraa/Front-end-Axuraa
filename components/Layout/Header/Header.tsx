"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LanguageButton } from "@/components/UI/Atoms/Button/LanguageButton";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();
  // Extract locale from pathname (e.g., "/en/about" -> "en")
  const locale = pathname.split('/')[1] || 'en'; // default to 'en' if no locale found

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const navLinks = [
    { name: "Home", href: `/${locale}` },
    { name: "Services", href: `/${locale}/services` },
    { name: "Business solutions", href: `/${locale}/businessSolutions` },
    { name: "Portfolio", href: `/${locale}/portfolio` },
    { name: "About Us", href: `/${locale}/aboutus` },
    { name: "Contact", href: `/${locale}/contact` },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo2.svg"
            alt="Axuram Logo"
            className={styles.logoImage}
            width={150}
            height={60}
            priority
          />
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${activeLink === link.name ? styles.active : ""}`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <span className={styles.navUnderline} />
                  )}
                </Link>
              </li>
            ))}
            <li
              className={`${styles.mobileLanguageItem} ${isMenuOpen ? styles.visible : ""}`}
            >
              <div className={styles.mobileLanguageButton}>
                <LanguageButton />
              </div>
            </li>
          </ul>
        </nav>

        <div className={styles.desktopLanguageBtn}>
          <LanguageButton />
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);