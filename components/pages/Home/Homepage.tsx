'use client';

import React from 'react';
import styles from './Homepage.module.css'; 
import ContactSection from '@/components/Section/HomePage/ContactSection/ContactSection';
import ServicesSection from '@/components/Section/HomePage/OurServicesSection/ServicesSection';
import BusinessSsection from '@/components/Section/HomePage/BusinessSection/BusinessSsection';
import RatingSection from '@/components/Section/HomePage/RatingSection/RatingSection';
import ProjectSection from '@/components/Section/HomePage/ProjectSection/ProjectSection';
import WorkerSection from '@/components/Section/HomePage/WorkerSection/WorkerSection';
import useClientTranslation from '@/hooks/useClientTranslation';

const Homepage = () => {
  const { t } = useClientTranslation('home');

  const workers = [
    {
      id: 1,
      title: "John Doe",
      category: "Frontend Developer",
      percentage: "+45%",
      description: "Delivered exceptional UI components with great attention to detail.",
      imageUrl: "/assets/ProfileCard.svg"
    },
    {
      id: 2,
      title: "Jane Smith",
      category: "UX Designer",
      percentage: "+60%",
      description: "Transformed user experience with intuitive design solutions.",
      imageUrl: "/assets/ProfileCard.svg"
    },
    {
      id: 3,
      title: "Alex Johnson",
      category: "Backend Developer",
      percentage: "+55%",
      description: "Built scalable and efficient server-side applications.",
      imageUrl: "/assets/ProfileCard.svg"
    },
    {
      id: 4,
      title: "Sarah Williams rfghj",
      category: "UI/UX Designer",
      percentage: "+65%",
      description: "Creates beautiful and functional user interfaces.",
      imageUrl: "/assets/ProfileCard.svg"
    },
    {
      id: 5,
      title: "Michael Brown",
      category: "Full Stack Developer",
      percentage: "+70%",
      description: "Expert in both frontend and backend development.",
      imageUrl: "/assets/ProfileCard.svg"
    },
    {
      id: 6,
      title: "Emily Davis",
      category: "Product Manager",
      percentage: "+75%",
      description: "Leads product development with a user-focused approach.",
      imageUrl: "/assets/ProfileCard.svg"
    },
    {
      id: 7,
      title: "David Wilson",
      category: "DevOps Engineer",
      percentage: "+68%",
      description: "Ensures smooth deployment and operations.",
      imageUrl: "/assets/ProfileCard.svg"
    },
    {
      id: 8,
      title: "Olivia Martin",
      category: "QA Engineer",
      percentage: "+72%",
      description: "Ensures the highest quality in every release.",
      imageUrl: "/assets/ProfileCard.svg"
    },
    {
      id: 9,
      title: "James Anderson",
      category: "Mobile Developer",
      percentage: "+62%",
      description: "Creates amazing cross-platform mobile experiences.",
      imageUrl: "/assets/ProfileCard.svg"
    },
    {
      id: 10,
      title: "Sophia Garcia",
      category: "UI/UX Designer",
      percentage: "+78%",
      description: "Designs intuitive and engaging user experiences.",
      imageUrl: "/assets/ProfileCard.svg"
    }
  ];

  return (
    <div className={styles.homePage}>
      <ServicesSection />
      <BusinessSsection/>
      <RatingSection
        badgeText={t('achievements.badgeText', 'Our Achievements')}
        title1={t('achievements.title1', 'How we help ')}
        title2={t('achievements.title2', 'Businesses Grow?')}
        subtitle={t('achievements.subtitle', 'Discover our comprehensive suite of services designed to elevate your digital presence')}
      />
      <ProjectSection
         badgeText={t('projects.badgeText', 'Our Services')}
         title1={t('projects.title1', 'How we help')}
         title2={t('projects.title2', 'Businesses Grow?')}
         subtitle={t('projects.subtitle', 'Discover our comprehensive suite of services designed to elevate your digital presence')}
         seeAllHref="#projects"
         seeAllText={t('projects.viewAll', 'View All Projects')}
       />

        <WorkerSection
          badgeText={t('team.badgeText', 'Our Client')}
          title1={t('team.title1', 'Meet Our')}
          title2={t('team.title2', 'Expert Team')}
          subtitle={t('team.subtitle', 'Dedicated professionals delivering exceptional results')}
          Workers={workers}
        />

        <ContactSection 
          badgeText={t('contact.badgeText', 'Our Team')}
          title1={t('contact.title1', 'How we help ')}
          title2={t('contact.title2', 'Businesses Grow?')}
          subtitle={t('contact.subtitle', 'Discover our comprehensive suite of services designed to elevate your digital presence')}
        />
    </div>
  );
};

export default React.memo(Homepage);