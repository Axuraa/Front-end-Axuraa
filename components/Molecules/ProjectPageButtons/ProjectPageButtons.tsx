import React from 'react';
import ProjectButton from '@/components/UI/Atoms/ProjectButton/ProjectButton';
import styles from './ProjectPageButtons.module.css';

interface ProjectPageButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  className?: string;
  filters: string[]; // Made required since it's essential
}

const ProjectPageButtons: React.FC<ProjectPageButtonsProps> = ({
  activeFilter,
  onFilterChange,
  className = '',
  filters = [], 
}) => {
  if (!filters.length) {
    console.warn('No filters provided to ProjectPageButtons');
    return null; 
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.buttonsWrapper}>
        {filters.map((filter) => (
          <ProjectButton
            key={filter}
            variant={activeFilter === filter ? 'primary' : 'outline'}
            onClick={() => onFilterChange(filter)}
            className={`${styles.filterButton} ${
              activeFilter === filter ? styles.active : ''
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </ProjectButton>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProjectPageButtons);