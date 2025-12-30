'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './LanguageButton.module.css';

import { LanguageButtonProps } from '@/types/Generals/buttonTypes';

export const LanguageButton = ({ className = '' }: LanguageButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'ar', name: 'Arabic', flag: 'https://flagcdn.com/w40/sa.png' },
    { code: 'bn', name: 'Bengali', flag: 'https://flagcdn.com/w40/bd.png' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'fr', name: 'French', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'de', name: 'German', flag: 'https://flagcdn.com/w40/de.png' },
    { code: 'hi', name: 'Hindi', flag: 'https://flagcdn.com/w40/in.png' },
    { code: 'it', name: 'Italian', flag: 'https://flagcdn.com/w40/it.png' },
    { code: 'ja', name: 'Japanese', flag: 'https://flagcdn.com/w40/jp.png' },
    { code: 'jv', name: 'Javanese', flag: 'https://flagcdn.com/w40/id.png' },
    { code: 'ko', name: 'Korean', flag: 'https://flagcdn.com/w40/kr.png' },
    { code: 'mr', name: 'Marathi', flag: 'https://flagcdn.com/w40/in.png' },
    { code: 'pt', name: 'Portuguese', flag: 'https://flagcdn.com/w40/pt.png' },
    { code: 'ru', name: 'Russian', flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'es', name: 'Spanish', flag: 'https://flagcdn.com/w40/es.png' },
    { code: 'sw', name: 'Swahili', flag: 'https://flagcdn.com/w40/tz.png' },
    { code: 'ta', name: 'Tamil', flag: 'https://flagcdn.com/w40/in.png' },
    { code: 'te', name: 'Telugu', flag: 'https://flagcdn.com/w40/in.png' },
    { code: 'tr', name: 'Turkish', flag: 'https://flagcdn.com/w40/tr.png' },
    { code: 'ur', name: 'Urdu', flag: 'https://flagcdn.com/w40/pk.png' }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[2]); // English default

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.dropdown} ${className}`} ref={dropdownRef}>
      <button 
        className={styles.languageButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        Select Language
        <ChevronDown 
          size={16} 
          className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.menuItem} ${
                selectedLanguage.code === lang.code ? styles.active : ''
              }`}
              onClick={() => {
                setSelectedLanguage(lang);
                setIsOpen(false);
                // Add your language change logic here
              }}
            >
              <span className={styles.flag}>
                <img 
                  src={lang.flag} 
                  alt={`${lang.name} flag`} 
                  className={styles.flagImage}
                />
              </span>
              <span className={styles.languageName}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
