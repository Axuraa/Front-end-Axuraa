'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageButton } from '@/components/UI/Atoms/Button/LanguageButton';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [

    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Business solutions', href: '/businessSolutions' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Contact', href: '/contact' },

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

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${activeLink === link.name ? styles.active : ''}`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                  {activeLink === link.name && <span className={styles.navUnderline} />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Button */}
        <LanguageButton />

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);

// "use client";
// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { LanguageButton } from "@/components/UI/Atoms/Button/LanguageButton";
// import styles from "./Header.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import { useLocale } from "next-intl";

// const Header = () => {
//   const [activeLink, setActiveLink] = useState("Home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const locale = useLocale();

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth <= 1024);
//     };

//     // Initial check
//     checkIfMobile();

//     // Add event listener for window resize
//     window.addEventListener("resize", checkIfMobile);

//     // Cleanup
//     return () => window.removeEventListener("resize", checkIfMobile);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: `/${locale}` },
//     { name: "Services", href: `/${locale}/services` },
//     { name: "Business solutions", href: `/${locale}/businessSolutions` },
//     { name: "Portfolio", href: `/${locale}/portfolio` },
//     { name: "About Us", href: `/${locale}/aboutus` },
//     { name: "Contact", href: `/${locale}/contact` },
//   ];

//   return (
//     <header className={styles.header}>
//       <div className={styles.headerContainer}>
//         {/* Logo */}
//         <div className={styles.logo}>
//           <Image
//             src="/assets/logo2.svg"
//             alt="Axuram Logo"
//             className={styles.logoImage}
//             width={150}
//             height={60}
//             priority
//           />
//         </div>

//         {/* Navigation */}
//         <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
//           <ul className={styles.navList}>
//             {navLinks.map((link) => (
//               <li key={link.name} className={styles.navItem}>
//                 <Link
//                   href={link.href}
//                   className={`${styles.navLink} ${activeLink === link.name ? styles.active : ""}`}
//                   onClick={() => {
//                     setActiveLink(link.name);
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   {link.name}
//                   {activeLink === link.name && (
//                     <span className={styles.navUnderline} />
//                   )}
//                 </Link>
//               </li>
//             ))}
//             {/* Mobile Language Button */}
//             <li
//               className={`${styles.mobileLanguageItem} ${isMenuOpen ? styles.visible : ""}`}
//             >
//               <div className={styles.mobileLanguageButton}>
//                 <LanguageButton />
//               </div>
//             </li>
//           </ul>
//         </nav>

//         {/* Desktop Language Button - Hidden on mobile */}
//         <div className={styles.desktopLanguageBtn}>
//           <LanguageButton />
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className={styles.menuToggle}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//           aria-expanded={isMenuOpen}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default React.memo(Header);
