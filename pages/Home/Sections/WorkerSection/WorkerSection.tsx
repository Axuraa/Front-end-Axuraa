'use client';
import React from 'react';
import styles from './WorkerSection.module.css';
import Badge from '@/components/UI/Badge/Badge';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import DevolpercCard from '@/components/UI/DevoleperCard/DevolpercCard';
import { HorizontalScroll } from '@/components/UI/ScrollComponents/ScrollComponents';

interface Worker {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

interface WorkerSectionProps {
  badgeText: string;
  title1: string;
  title2: string;
  subtitle: string;
  Workers?: Worker[];  // Make Workers optional
}

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