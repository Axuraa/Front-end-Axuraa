'use client';
import React from 'react';
import styles from './SectionHeader.module.css';
import { SectionHeaderProps } from '@/types/Generals/sectionHeaderTypes';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title1,
  title2,
  subtitle,
  className = '',
  textAlign = 'center',
  titleColor,
}) => {
  return (
    <div 
      className={`${styles.header} ${className}`}
      style={{ 
        textAlign: textAlign as any,
        alignItems: textAlign === 'left' ? 'flex-start' : textAlign === 'right' ? 'flex-end' : 'center'
      }}
    >
      {(title1 || title2) && (
        <div className={styles.titleGroup}>
          {title1 && (
            <h1 className={styles.title1} style={{ color: titleColor }}>
              {title1}
            </h1>
          )}
          {title2 && (
            <h2 className={styles.title2}>
              {title2}
            </h2>
          )}
        </div>
      )}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
export default React.memo(SectionHeader);