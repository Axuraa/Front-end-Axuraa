// components/UI/ProjectCard/ProjectCard.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import styles from './ProjectCart.module.css';

import { ProjectCardProps } from '@/types/Generals/cardTypes';
import useClientTranslation from '@/hooks/useClientTranslation';

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  percentage,
  description,
  imageUrl
}) => {
  const { locale } = useClientTranslation('projects');
  
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={imageUrl} 
          alt={title} 
          width={356}
          height={208}
          className={styles.projectImage}
          priority
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.badge}>{category}</span>
        
        <div className={styles.statsRow}>
          <div className={styles.percentage}>{percentage}</div>
          <p className={styles.description}>{description}</p>
        </div>
        
        <a href={`/${locale}/case-study/${id}`} className={styles.readMore}>
          {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
          <span style={{ transform: locale === 'ar' ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>→</span>
        </a>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);