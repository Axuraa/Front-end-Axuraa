import React from 'react';
import Image from 'next/image';
import styles from './SocialIcon.module.css';

interface SocialIconProps {
  icon: string;
  label?: string;
  showLabel?: boolean;
  alt?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  label,
  showLabel = false,
  alt = 'Social icon'
}) => {
  return (
    <div className={styles.socialIconWrapper}>
      <div className={styles.socialIcon}>
        <div className={styles.iconCircle}>
          <Image 
            src={icon} 
            alt={alt}
            width={35}
            height={34.913}
            className={styles.iconImage}
          />
        </div>
      </div>
      {showLabel && label && (
        <p className={styles.label}>{label}</p>
      )}
    </div>
  );
};

export default SocialIcon;