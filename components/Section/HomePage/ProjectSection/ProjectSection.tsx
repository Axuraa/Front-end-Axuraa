'use client';
import React, { useEffect, useState } from 'react';
import styles from './ProjectSection.module.css';
import Badge from '@/components/UI/Atoms/Badge/Badge';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';
import ProjectCard from '@/components/UI/Muscles/ProjectCard/ProjectCard';
import SeeAll from '@/components/UI/Atoms/SeeAll/SeeAll';

import { ProjectSectionProps } from '@/types/HomePage/projectsTypes';
import { getAllProjects } from '@/service/Projects/projects';
import useClientTranslation from '@/hooks/useClientTranslation';

const ProjectSection: React.FC<ProjectSectionProps> = ({
  badgeText,
  title1,
  title2,
  subtitle,
  projects = [],
  seeAllText = "See All case studies"
}) => {
  const { locale } = useClientTranslation('projects');
  const [apiProjects, setApiProjects] = useState(projects);
  const [loading, setLoading] = useState(false);

  // Dynamic portfolio href based on locale
  const portfolioHref = `/${locale}/portfolio`;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const result = await getAllProjects(locale as 'en' | 'ar');
        
        if (result.success && result.data) {
          // Transform API data to match Project interface
          const transformedProjects = result.data.slice(0, 3).map(project => ({
            id: project._id,
            title: project.title?.en || 'Untitled Project',
            category: project.services?.[0]?.services_id?.title?.en || project.technology_stack?.[0] || 'General',
            percentage: project.case_study_results?.[0]?.value || '+50%',
            description: project.case_study_results?.[0]?.description?.en || 'Project description',
            imageUrl: project.main_image_url || '/assets/ProjectImage.png'
          }));

          
          
          setApiProjects(transformedProjects);
          console.log('Loaded projects from API:', transformedProjects);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        // Keep using mock data if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [locale]);

  return (
    <section className={styles.ProjectSection}>
      <Badge text={badgeText} show={true} />
      <SectionHeader
        title1={title1}
        title2={title2}
        subtitle={subtitle}
      />
      <SeeAll href={portfolioHref}>
        {seeAllText}
      </SeeAll>
      <div className={styles.ProjectGrid}>
         {apiProjects?.map((project) => ( 
          <ProjectCard
            key={project.id}
            id={project.id}
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