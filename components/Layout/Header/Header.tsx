'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageButton } from '@/components/UI/Button/LanguageButton';
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Business solutions', href: '#business' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image 
            src="/assets/logo.png" 
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
                <a
                  href={link.href}
                  className={`${styles.navLink} ${activeLink === link.name ? styles.active : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                  {activeLink === link.name && <span className={styles.navUnderline} />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Button */}
        <LanguageButton />

        {/* Mobile Menu Toggle */}
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