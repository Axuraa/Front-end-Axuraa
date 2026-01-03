'use client';
import React, { useMemo, useState } from 'react';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import ProjectsGrid from '@/components/Section/PortfolioPage/ProjectsGrid.tsx/ProjectsGrid';
import styles from './PortfolioPage.module.css';
import ProjectPageButtons from '@/components/Molecules/ProjectPageButtons/ProjectPageButtons';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const PortfolioPage = () => {

const projectFilters = [
  "All",
  "ERP Systems",
  "Desktop App",
  "UI/UX Design",
  "Custom Software",
  "LMS",
  "Booking Systems",
  "HR Systems",
  "Mobile App",
  "E-commerce",
  "POS",
  "CRM",
  "SaaS",
  "AI & ML",
  "Web Platforms"
];

const [activeFilter, setActiveFilter] = useState('All');
const projects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with payment integratior',
    category: 'Web Development',
    percentage: '92%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    category: 'Mobile App',
    percentage: '88%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A modern portfolio website with smooth animations and responsive design.',
    category: 'UI/UX Design',
    percentage: '95%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics and insights.',
    category: 'Web Development',
    percentage: '85%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '5',
    title: 'Fitness Tracker',
    description: 'Mobile app for tracking workouts and nutrition plans.',
    category: 'Mobile App',
    percentage: '90%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '6',
    title: 'Restaurant Booking System',
    description: 'Online reservation system for restaurants with table management.',
    category: 'Web Development',
    percentage: '87%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '7',
    title: 'Weather Forecast App',
    description: 'Real-time weather forecasting application with 5-day predictions.',
    category: 'Mobile App',
    percentage: '93%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '8',
    title: 'E-learning Platform',
    description: 'Interactive online learning platform with video courses and quizzes.',
    category: 'Web Development',
    percentage: '89%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '9',
    title: 'Travel Blog',
    description: 'A responsive travel blog with image galleries and location mapping.',
    category: 'UI/UX Design',
    percentage: '91%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '10',
    title: 'Recipe Finder',
    description: 'Mobile app for discovering and saving recipes with dietary filters.',
    category: 'Mobile App',
    percentage: '86%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '11',
    title: 'Job Board',
    description: 'Platform connecting employers with job seekers in the tech industry.',
    category: 'Web Development',
    percentage: '84%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '12',
    title: 'Fitness Challenge App',
    description: '30-day fitness challenge with progress tracking and social features.',
    category: 'Mobile App',
    percentage: '94%',
    imageUrl: '/assets/ProjectImage.png'
  },
  {
    id: '13',
    title: 'Event Management System',
    description: 'End-to-end solution for organizing and managing events and attendees.',
    category: 'Web Development',
    percentage: '89%',
    imageUrl: '/assets/ProjectImage.png'
  }
];

   const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => 
      project.category === activeFilter
    );
  }, [activeFilter, projects]);
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
      />
     
      <div className={styles.projectsSection}>
        <ProjectPageButtons
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filters={projectFilters} 
        />
        
        <div className={styles.container}>
          <ProjectsGrid projects={filteredProjects} />
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