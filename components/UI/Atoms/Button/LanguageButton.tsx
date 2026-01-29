'use client';

import { useState } from 'react';
import styles from './LanguageButton.module.css';

interface LanguageButtonProps {
  className?: string;
}

export const LanguageButton = ({ className = '' }: LanguageButtonProps) => {
  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'ar', name: 'Arabic', flag: 'https://flagcdn.com/w40/sa.png' }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // English default

  const toggleLanguage = () => {
    // Toggle between English and Arabic
    setSelectedLanguage(prev => 
      prev.code === 'en' ? languages[1] : languages[0]
    );
    // Add your language change logic here
  };

  return (
    <div className={className}>
      <button 
        className={styles.languageButton}
        onClick={toggleLanguage}
      >
        <span className={styles.flag}>
          <img 
            src={selectedLanguage.flag} 
            alt={`${selectedLanguage.name} flag`} 
            className={styles.flagImage}
          />
        </span>
        <span className={styles.languageName}>{selectedLanguage.name}</span>
      </button>
    </div>
  );
};