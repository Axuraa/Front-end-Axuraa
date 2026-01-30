'use client';
import { motion } from 'framer-motion';
import styles from './ProjectsGrid.module.css';
import ProjectCard from '@/components/UI/Muscles/ProjectCard/ProjectCard';
import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  percentage: string;
  imageUrl: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  if (!projects.length) {
    return <div className={styles.noProjects}>No projects found for this filter.</div>;
  }

  return (
    <motion.div 
      className={styles.projectsGridContainer}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={item}
            className={styles.gridItem}
          >
            <ProjectCard 
              id={project.id}
              title={project.title}
              category={project.category}
              percentage={project.percentage}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default React.memo(ProjectsGrid);
