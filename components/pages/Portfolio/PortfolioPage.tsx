'use client';
import React, { useMemo, useState, useEffect } from 'react';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import ProjectsGrid from '@/components/Section/PortfolioPage/ProjectsGrid.tsx/ProjectsGrid';
import styles from './PortfolioPage.module.css';
import ProjectPageButtons from '@/components/Molecules/ProjectPageButtons/ProjectPageButtons';
import { getAllProjects, ProjectItem } from '@/service/Projects/projects';
import { getAllServices, ServiceItem } from '@/service/Services/services';
import useClientTranslation from '@/hooks/useClientTranslation';

const PortfolioPage = () => {
  const { t, locale } = useClientTranslation('portfolio');
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects and services from APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Starting to fetch projects and services in ${locale}...`);
        setLoading(true);
        
        // Fetch both projects and services in parallel with current locale
        const [projectsResult, servicesResult] = await Promise.all([
          getAllProjects(locale as 'en' | 'ar'),
          getAllServices(locale as 'en' | 'ar')
        ]);
        
        // Handle projects
        if (projectsResult.success && projectsResult.data) {
          console.log('Projects loaded successfully:', projectsResult.data);
          setProjects(projectsResult.data);
        } else {
          console.log('Projects API error:', projectsResult.error);
          setError(projectsResult.error || 'Failed to load projects');
        }
        
        // Handle services
        if (servicesResult.success && servicesResult.data) {
          console.log('Services loaded successfully:', servicesResult.data);
          setServices(servicesResult.data);
        } else {
          console.log('Services API error:', servicesResult.error);
        }
        
      } catch (err) {
        console.log('Fetch error:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [locale]);

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

  // Create filters from services and project categories
  const filters = useMemo(() => {
    const serviceTitles = services.map(service => service.title[locale as keyof typeof service.title]);
    const allFilters = ['All', ...serviceTitles];
    
    // Remove duplicates while preserving order
    const uniqueFilters = Array.from(new Set(allFilters));
    
    return uniqueFilters.length > 1 ? uniqueFilters : 
      ["All", "ERP Systems", "Desktop App", "UI/UX Design", "Custom Software", "LMS", "Booking Systems", "HR Systems", "Mobile App", "E-commerce", "POS", "CRM", "SaaS", "AI & ML", "Web Platforms"];
  }, [services, locale]);

  // console.log( "the projectCategories is :" +  projectCategories)

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
        title: project.title?.[locale as 'en' | 'ar'] || 'Untitled Project',
        category: project.services?.[0]?.services_id?.title?.[locale as 'en' | 'ar'] || project.technology_stack?.[0] || 'General',
        percentage: project.case_study_results?.[0]?.value || '+50%',
        description: project.case_study_results?.[0]?.description?.[locale as 'en' | 'ar'] || 'Project description',
        imageUrl: project.main_image_url || '/assets/ProjectImage.png'
      };
    });
    console.log('Transformed projects:', transformed);
    return transformed;
  }, [filteredProjects, locale]);

  // Loading and error states
  // if (loading) {
  //   return <div className={styles.loading}>Loading projects...</div>;
  // }

  // if (error) {
  //   return <div className={styles.error}>{error}</div>;
  // }

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
          {loading ? (
            <div className={styles.sectionLoading}>
              <div className={styles.loadingSpinner}></div>
              <p>Loading projects...</p>
            </div>
          ) : error ? (
            <div className={styles.sectionError}>{error}</div>
          ) : (
            <ProjectsGrid projects={transformedProjects} />
          )}
        </div>
      </div>
    </div>
  );
};
export default React.memo(PortfolioPage);