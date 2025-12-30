'use client';
import { motion } from 'framer-motion';
import styles from './ProjectsGrid.module.css';
<<<<<<< HEAD
import ProjectCard from '@/components/UI/Atoms/ProjectCard/ProjectCard';
=======
import ProjectCard from '@/components/UI/Muscles/ProjectCard/ProjectCard';
import React from 'react';
>>>>>>> ProfilePage

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
<<<<<<< HEAD
=======
  if (!projects.length) {
    return <div className={styles.noProjects}>No projects found for this filter.</div>;
  }

>>>>>>> ProfilePage
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

<<<<<<< HEAD
export default ProjectsGrid;
=======
export default React.memo(ProjectsGrid);
>>>>>>> ProfilePage
