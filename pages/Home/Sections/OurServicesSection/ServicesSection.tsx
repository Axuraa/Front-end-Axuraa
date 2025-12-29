'use client';
import React from 'react';
import styles from './ServicesSection.module.css';
import Card from '@/components/UI/Card/Card';
import Badge  from'@/components/UI/Badge/Badge';
import DirectionCard from '@/components/UI/Card/DirectionCard';
import SectionHeader from '@/components/Layout/SectionHeader/SectionHeader';


const ServicesSection = () => {
  const badgeText = "Our Services";

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
        {/* <div className={styles.header}>
          <h2 className={styles.title1}>How we help </h2>
          <h2 className={styles.title2}>Businesses Grow?</h2>
          <p className={styles.subtitle}>Discover our comprehensive suite of services designed to elevate your digital presence</p>
        </div> */}

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              iconSrc={service.icon}
              borderRadius={index % 2 === 0 ? "0 0 68.087px 0" : "0  0 68.087px 0"}
            />
          ))}
          <DirectionCard
            title="See All Services"
            description="Explore our full catalog"
            iconSrc="/assets/DirectionIcon.svg"
            borderRadius="0  0 68.087px  0"
           />
        </div>
    </section>
  );
};

export default React.memo(ServicesSection);