'use client';
import React, { useState, useEffect } from 'react';
import styles from './SocialMediaCard.module.css';
import { SocialMediaCardProps } from '@/types/Generals/cardTypes';
import Icon from '../../Atoms/Icon/Icon';

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ 
  Icon: IconComponent, 
  label, 
  link,
}) => {
  const [iconSize, setIconSize] = useState(52);

  console.log('=== SocialMediaCard DEBUG ===');
  console.log('IconComponent:', IconComponent);
  console.log('typeof IconComponent:', typeof IconComponent);
  console.log('label:', label);
  console.log('link:', link);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= 375) {
        setIconSize(20);
      } else if (window.innerWidth <= 480) {
        setIconSize(28);
      } else if (window.innerWidth <= 768) {
        setIconSize(36);
      } else {
        setIconSize(52);
      }
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);
    return () => window.removeEventListener('resize', updateIconSize);
  }, []);

  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={styles.card} 
      onClick={handleClick}
    >
      {/* Hidden SVG with gradient definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="socialIconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#902501" />
            <stop offset="100%" stopColor="#D04A1D" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className={styles.iconCircle}>
        {typeof IconComponent === 'string' ? (
          <img 
            src={IconComponent}
            alt={label}
            width={iconSize}
            height={iconSize}
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)', // Make icon white
            }}
          />
        ) : (
          <IconComponent width={iconSize} height={iconSize} />
        )}
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default SocialMediaCard;