'use client';
import React from 'react';
import styles from './RatingSection.module.css';
import Badge from '@/components/UI/Badge/Badge';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import Rating from '@/components/UI/RatingComponents/Rating';

interface RatingItem {
  id: number;
  value: number;
  label: string;
  icon: string;
  showIcon?: boolean;
}

interface RatingSectionProps {
  badgeText: string;
  title1: string;
  title2: string;
  subtitle: string;
  ratingItems?: RatingItem[];
}

const RatingSection: React.FC<RatingSectionProps> = ({ 
  badgeText,
  title1,
  title2,
  subtitle,
  ratingItems = []
}) => {
  return (
    <section id="rating-section" className={styles.RatingSection}>
      <Badge text={badgeText} show={true} />
      <SectionHeader
        title1={title1}
        title2={title2}
        subtitle={subtitle}
      />
      {ratingItems.length > 0 && (
        <Rating 
          items={ratingItems}
          duration={1500}  
          maxValue={100}   
        />
      )}
    </section>
  );
};

export default React.memo(RatingSection);