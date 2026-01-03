'use client';
import React from 'react';
import styles from './BusinessSolutions.module.css';
import HeroSection from '@/components/Layout/HeroSection/HeroSection';
import ServiceCard from '@/components/Molecules/ServiceCard/ServiceCard';

const services = [
  {
    title: "Mobile App Development",
    description: "Native mobile applications for Android and iOS with push notifications and offline support - seamless user experience across all devices.",
    features: [
      "Custom web application and platform development",
      "Cross-Responsive UI/UX design and prototyping",
      "Push Full-stack development and API integration ",
      "CMS and e-commerce platform customization",
    ],
    // iconUrl: "/assets/mobile-icon.svg",
    buttonText: "Learn More"
  },
  {
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.",
    features: [
      "Responsive web design",
      "Progressive Web Apps (PWAs)",
      "E-commerce solutions",
      "Content Management Systems",
      "API integration"
    ],
    // iconUrl: "/assets/web-icon.svg",
    buttonText: "Explore Web Solutions"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure and services to power your business applications and data.",
    features: [
      "Cloud migration services",
      "Serverless architecture",
      "Cloud security & compliance",
      "DevOps automation",
      "24/7 monitoring"
    ],
    // iconUrl: "/assets/cloud-icon.svg",
    buttonText: "Discover Cloud Services"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces designed to enhance user experience and drive engagement.",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Interactive design",
      "Design systems",
      "Accessibility compliance"
    ],
    // iconUrl: "/assets/design-icon.svg",
    buttonText: "See Our Designs"
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive testing services to ensure your applications are reliable, secure, and performant.",
    features: [
      "Automated testing",
      "Performance testing",
      "Security testing",
      "Cross-browser testing",
      "Mobile testing"
    ],
    // iconUrl: "/assets/qa-icon.svg",
    buttonText: "Learn About QA"
  },
  {
    title: "IT Consulting",
    description: "Expert technology consulting to help you make informed decisions and implement effective IT strategies.",
    features: [
      "Technology assessment",
      "Digital transformation",
      "IT infrastructure planning",
      "Cybersecurity consulting",
      "Vendor selection"
    ],
    // iconUrl: "/assets/consulting-icon.svg",
    buttonText: "Get Consultation"
  }
];

const BusinessSolutions = () => {
  return (
    <div className={styles.BusinessPage}>
      <HeroSection 
              title1="Architecting the Future of"
              title2="Digital Business."
              subtitle1="At Axuraa, we don't just write code. We build the digital infrastructure that powers the world's most ambitious companies."
              badgeText="INNOVATION IN PROGRESS"
              showBackgroundDots={false}
              showAnimatedCircles={true}
              showEllipseDecorations={true}
              showBadge={false}
              showTrustedSection={false}
              showPrimaryButton={true}
              showSecondaryButton={false}
              
              showStatusBadge={true}
              backgroundType='Circle'
            />
            <div className={styles.BusinessContainer}>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        features={service.features}
                        buttonText={service.buttonText}
                        onButtonClick={() => console.log(`Clicked ${service.title}`)}
                    />
                    ))}
            </div>
    </div>
  );
};

export default React.memo(BusinessSolutions);