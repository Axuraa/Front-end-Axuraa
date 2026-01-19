'use client';
import React from 'react';
import styles from './BusinessSsection.module.css';
import Card from '@/components/UI/Atoms/Card/Card';
import Badge  from'@/components/UI/Atoms/Badge/Badge';
import DirectionCard from '@/components/UI/Atoms/Card/DirectionCard';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';


const ServicesSection = () => {
  const badgeText = "Business solutions";

  const services = [
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions.",
      icon: "/assets/CardIcon.svg"
    },
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies to meet your business needs.",
      icon: "/assets/CardIcon.svg"
    },
    {
      title: "IT Consulting",
      description: "Expert advice to optimize your IT infrastructure and strategy.",
      icon: "/assets/CardIcon.svg"
    },
  ];

  return (
    <section className={styles.servicesSection}>
        <Badge text={badgeText} show={true}  />
        <SectionHeader
            title1="How we help"
            title2="Businesses Grow?"
            subtitle="Discover our comprehensive suite of services designed to elevate your digital presence"
        />
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              iconSrc={service.icon}
              borderRadius={index % 2 === 0 ? "0  68.087px 0 0" : "0 68.087px 0 0"}
            />
          ))}
          <DirectionCard
            title="See All Services"
            description="Explore our full catalog"
            iconSrc="/assets/DirectionIcon.svg"
            borderRadius="0   68.087px 0 0"
           />

        </div>
    </section>
  );
};

export default React.memo(ServicesSection);