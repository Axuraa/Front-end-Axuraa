"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LanguageButton } from "@/components/UI/Atoms/Button/LanguageButton";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useClientTranslation from "@/hooks/useClientTranslation";

const Header = () => {
  const { t, locale } = useClientTranslation('navlink');
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');

  const pathname = usePathname();

  // Set locale based on pathname, but only on client side
  useEffect(() => {
    if (pathname) {
      const extractedLocale = pathname.split('/')[1] || 'en';
      setCurrentLocale(extractedLocale);
    }
  }, [pathname]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const navLinks = [
    { key: "home", href: `/` },
    { key: "services", href: `/${currentLocale}/services` },
    { key: "businessSolutions", href: `/${currentLocale}/businessSolutions` },
    { key: "portfolio", href: `/${currentLocale}/portfolio` },
    { key: "aboutUs", href: `/${currentLocale}/aboutus` },
    { key: "contact", href: `/${currentLocale}/contact` },
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
              <li key={link.key} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${activeLink === t(link.key) ? styles.active : ""}`}
                  onClick={() => {
                    setActiveLink(t(link.key));
                    setIsMenuOpen(false);
                  }}
                >
                  {t(link.key)}
                  {activeLink === t(link.key) && (
                    <span className={styles.navUnderline} />
                  )}
                </Link>
              </li>
            ))}
            <li
              className={`${styles.mobileLanguageItem} ${isMenuOpen ? styles.visible : ""}`}
            >
              <div className={styles.mobileLanguageButton}>
                {/* <LanguageButton /> */}
              </div>
            </li>
          </ul>
        </nav>

        <div className={styles.desktopLanguageBtn}>
          {/* <LanguageButton /> */}
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