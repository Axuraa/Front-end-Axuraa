'use client';

import React from 'react';
import styles from './SocialMediaCard.module.css';
import { SocialMediaCardProps } from '@/types/Generals/cardTypes';
import Icon from '../../Atoms/Icon/Icon';

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ 
  Icon: IconComponent, 
  label, 
  link,
}) => {
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
        <Icon 
          icon={<IconComponent width={52} height={52} />}
          width={52}
          height={52}
          alt={label}
          noHover={true}
          noPadding={true}
        />
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default SocialMediaCard;