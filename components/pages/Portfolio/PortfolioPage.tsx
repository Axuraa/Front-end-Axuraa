'use client';
import React, { useMemo, useState, useEffect } from 'react';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import ProjectsGrid from '@/components/Section/PortfolioPage/ProjectsGrid.tsx/ProjectsGrid';
import styles from './PortfolioPage.module.css';
import ProjectPageButtons from '@/components/Molecules/ProjectPageButtons/ProjectPageButtons';
import { getAllProjects, ProjectItem } from '@/service/Projects/projects';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Starting to fetch projects...');
        setLoading(true);
        const result = await getAllProjects('en');
        console.log('API result received:', result);
        
        if (result.success && result.data) {
          console.log('Projects loaded successfully:', result.data);
          console.log('Number of projects:', result.data.length);
          setProjects(result.data);
        } else {
          console.log('Projects API error:', result.error);
          console.log('Full result object:', result);
          setError(result.error || 'Failed to load projects');
        }
      } catch (err) {
        console.log('Projects fetch error:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Extract unique categories from projects for dynamic filters
  const projectCategories = useMemo(() => {
    const categories = new Set<string>();
    projects.forEach((project: ProjectItem) => {
      // Use technology stack or status as categories since API doesn't have category field
      if (project.technology_stack && project.technology_stack.length > 0) {
        project.technology_stack.forEach((tech: string) => categories.add(tech));
      }
      if (project.status) {
        categories.add(project.status);
      }
    });
    return Array.from(categories);
  }, [projects]);

  // Use dynamic filters if available, otherwise fallback to static ones
  const filters = useMemo(() => {
    return projectCategories.length > 0 ? 
      ['All', ...projectCategories] : 
      ["All", "ERP Systems", "Desktop App", "UI/UX Design", "Custom Software", "LMS", "Booking Systems", "HR Systems", "Mobile App", "E-commerce", "POS", "CRM", "SaaS", "AI & ML", "Web Platforms"];
  }, [projectCategories]);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    
    return projects.filter((project: ProjectItem) => {
      // Check if filter matches technology stack
      if (project.technology_stack && project.technology_stack.includes(activeFilter)) {
        return true;
      }
      // Check if filter matches status
      if (project.status === activeFilter) {
        return true;
      }
      // Check if filter matches any service titles
      if (project.services && project.services.some((service: any) => 
        service.services_id.title.en === activeFilter || 
        service.services_id.title.ar === activeFilter
      )) {
        return true;
      }
      return false;
    });
  }, [activeFilter, projects]);

  // Transform API data to match ProjectsGrid interface
  const transformedProjects = useMemo(() => {
    console.log('Transforming projects:', filteredProjects);
    const transformed = filteredProjects.map((project: ProjectItem) => {
      console.log('Project _id:', project._id);
      return {
        id: project._id,
        title: project.title.en,
        description: project.overview.en,
        category: project.technology_stack[0] || 'Web Development',
        percentage: '95%',
        imageUrl: '/assets/ProjectImage.png'
      };
    });
    console.log('Transformed projects:', transformed);
    return transformed;
  }, [filteredProjects]);

  // Loading and error states
  if (loading) {
    return <div className={styles.loading}>Loading projects...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.portfolioPage}>
      <HeroSection 
        title1="Architecting the Future of"
        title2="Digital Business."
        subtitle1="At Axuraa, we don't just write code. We build the digital infrastructure that powers the world's most ambitious companies."
        badgeText="INNOVATION IN PROGRESS"
        showBackgroundDots={false}
        showAnimatedCircles={true}
        showBadge={false}
        showTrustedSection={false}
        showPrimaryButton={true}
        showSecondaryButton={false}
        showEllipseDecorations={true}
        showStatusBadge={true}
        backgroundType="Circle"
        height="75vh"
      />
     
      <div className={styles.projectsSection}>
        <ProjectPageButtons
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filters={filters} 
        />
        
        <div className={styles.container}>
          <ProjectsGrid projects={transformedProjects} />
        </div>
      </div>
{/* 
       <ProjectPageButtons
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filters={projectFilters} 
        /> */}
    </div>
  );
};
export default React.memo(PortfolioPage);