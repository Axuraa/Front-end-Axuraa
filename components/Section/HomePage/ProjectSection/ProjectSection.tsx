'use client';
import React from 'react';
import styles from './ProjectSection.module.css';
import Badge from '@/components/UI/Atoms/Badge/Badge';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import ProjectCard from '@/components/UI/Muscles/ProjectCard/ProjectCard';
import SeeAll from '@/components/UI/Atoms/SeeAll/SeeAll';

import { ProjectSectionProps } from '@/types/HomePage/projectsTypes';

const ProjectSection: React.FC<ProjectSectionProps> = ({
  badgeText,
  title1,
  title2,
  subtitle,
  projects = [],
  seeAllHref = "#",
  seeAllText = "See All case studies"
}) => {
  return (
    <section className={styles.ProjectSection}>
      <Badge text={badgeText} show={true} />
      <SectionHeader
        title1={title1}
        title2={title2}
        subtitle={subtitle}
      />
      <SeeAll href={seeAllHref}>
        {seeAllText}
      </SeeAll>
      <div className={styles.ProjectGrid}>
         {projects?.map((project) => ( 
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            percentage={project.percentage}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(ProjectSection);