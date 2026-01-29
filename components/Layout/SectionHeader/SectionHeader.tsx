'use client';
import React from 'react';
import styles from './SectionHeader.module.css';
import { SectionHeaderProps } from '@/types/Generals/sectionHeaderTypes';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title1,
  title2,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`${styles.header} ${className}`}>
      <h2 className={styles.title1}>{title1}</h2>
      <h2 className={styles.title2}>{title2}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
export default React.memo(SectionHeader);