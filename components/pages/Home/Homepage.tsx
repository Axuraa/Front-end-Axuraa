'use client';

import React from 'react';
import styles from './Homepage.module.css'; 
// import ServicesSection from '@/components/Section/HomePage/OurServicesSection/ServicesSection';
// import StatsSection from '@/components/Section/HomePage/StatsSection';
import ContactSection from '@/components/Section/HomePage/ContactSection/ContactSection';
import ServicesSection from '@/components/Section/HomePage/OurServicesSection/ServicesSection';
import BusinessSsection from '@/components/Section/HomePage/BusinessSection/BusinessSsection';
import RatingSection from '@/components/Section/HomePage/RatingSection/RatingSection';
import ProjectSection from '@/components/Section/HomePage/ProjectSection/ProjectSection';
import WorkerSection from '@/components/Section/HomePage/WorkerSection/WorkerSection';
import { s } from 'framer-motion/client';

// Dynamically import components with no SSR
// const HeroSection = dynamic(() => import('@/Pages/Home/Sections/HeroSection'), { ssr: false });
// const ServicesSection = dynamic(() => import('@/components/Section/HomePage/ServicesSection'), { ssr: false });
// const AboutSection = dynamic(() => import('@/components/Section/HomePage/AboutSection'), { ssr: false });
// const StatsSection = dynamic(() => import('@/components/Section/HomePage/StatsSection'), { ssr: false });
// const ContactSection = dynamic(() => import('@/components/Section/HomePage/ContactSection'), { ssr: false });
// const Footer = dynamic(() => import('@/components/Section/HomePage/Footer'), { ssr: false });


const ratingItems = [
  { id: 1, value: 50, label: 'Projects Completed', icon: '/assets/RatingIcon.svg', showIcon: true , suffix: '+' as const},
  { id: 2, value: 45, label: 'Happy Clients', icon: '/assets/RatingIcon.svg', showIcon: true , suffix: '+' as const},
  { id: 3, value: 30, label: 'Team Members', icon: '/assets/RatingIcon.svg', showIcon: true , suffix: '+' as const},
  { id: 4, value: 95, label: 'Success Rate', icon: '/assets/RatingIcon.svg', showIcon: true , suffix: '+' as const}
];

const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      percentage: "+45%",
      description: "Boosted online sales with a modern e-commerce solution.",
      imageUrl: "/assets/ProjectImage.png"
    },
    {
      id: 2,
      title: "Cybersecurity Suite",
      category: "Security",
      percentage: "+60%",
      description: "Enhanced security infrastructure for enterprise clients.",
      imageUrl: "/assets/ProjectImage.png"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Finance",
      percentage: "+75%",
      description: "Revolutionary banking experience on mobile devices.",
      imageUrl: "/assets/ProjectImage.png"
    }
  ];

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
const Homepage = () => {
  return (
    <div className={styles.homePage}>
      <ServicesSection />
      <BusinessSsection/>
      <RatingSection
        badgeText="Our Achievements"
        title1="How we help "
        title2="Businesses Grow?"
        subtitle="Discover our comprehensive suite of services designed to elevate your digital presence"
        ratingItems={ratingItems}
      />
      <ProjectSection
         badgeText="Our Services"
         title1="How we help"
         title2="Businesses Grow?"
         subtitle="Discover our comprehensive suite of services designed to elevate your digital presence"
         seeAllHref="#projects"
         seeAllText="View All Projects"
        projects={projects}
       />

        <WorkerSection
          badgeText="Our Team"
          title1="Meet Our"
          title2="Expert Team"
          subtitle="Dedicated professionals delivering exceptional results"
          Workers={workers}
        />

        <ContactSection badgeText="Our Team"
          title1="How we help "
          title2="Businesses Grow?"
          subtitle="Discover our comprehensive suite of services designed to elevate your digital presence"
          
        />
       
    </div>
  );
};

export default React.memo(Homepage);