'use client';
import React from 'react';
import styles from './WorkerSection.module.css';
import Badge from '@/components/UI/Atoms/Badge/Badge';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import DevolpercCard from '@/components/UI/Atoms/DevoleperCard/DevolpercCard';
import { HorizontalScroll } from '@/components/UI/Atoms/ScrollComponents/ScrollComponents';

import { WorkerSectionProps } from '@/types/HomePage/workerTypes';

const WorkerSection: React.FC<WorkerSectionProps> = ({
  badgeText,
  title1,
  title2,
  subtitle,
  Workers = [],  // Default to empty array
}) => {
  return (
    <section className={styles.WorkerSection}>
      <Badge text={badgeText} show={true} />
      <SectionHeader
        title1={title1}
        title2={title2}
        subtitle={subtitle}
      />
      <HorizontalScroll 
        className={styles.WorkerGrid}
      >
        {Workers?.map((worker) => (  // Add optional chaining
          <DevolpercCard
            key={worker.id}
            testimonial={worker.description}
            authorName={worker.title}
            authorRole={worker.category}
            avatarSrc={worker.imageUrl}
          />
        ))}
      </HorizontalScroll>
    </section>
  );
};

export default React.memo(WorkerSection);