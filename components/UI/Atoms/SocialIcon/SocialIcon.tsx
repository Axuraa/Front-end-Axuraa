import React from 'react';
import Image from 'next/image';
import styles from './SocialIcon.module.css';

import { SocialIconProps } from '@/types/Generals/iconsTypes';

const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  label,
  showLabel = false,
  alt = 'Social icon'
}) => {
  // Check if the icon URL is external (starts with http)
  const isExternalUrl = icon.startsWith('http');
  
  return (
    <div className={styles.socialIconWrapper}>
      <div className={styles.socialIcon}>
        <div className={styles.iconCircle}>
          {isExternalUrl ? (
            // Use regular img tag for external URLs
            <img 
              src={icon} 
              alt={alt}
              width={35}
              height={34.913}
              className={styles.iconImage}
            />
          ) : (
            // Use Next.js Image component for local assets
            <Image 
              src={icon} 
              alt={alt}
              width={35}
              height={34.913}
              className={styles.iconImage}
            />
          )}
        </div>
      </div>
      {showLabel && label && (
        <p className={styles.label}>{label}</p>
      )}
    </div>
  );
};

export default SocialIcon;