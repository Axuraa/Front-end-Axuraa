

import React from 'react';
import styles from './WhyUs.module.css';
import Card from '@/components/UI/Muscles/ValueCard/ValueCard';
import Typography from '@/components/UI/Atoms/Typography/Typography';

const WhyUs: React.FC = () => {
  const values = [
    {
      iconSrc: '/assets/psychology.svg',
      title: 'Innovation First',
      description: 'We constantly explore new technologies to keep you ahead of the curve.',
    },
    {
      iconSrc: '/assets/shield.svg',
      title: 'Integrity',
      description: 'Transparency in every step. No hidden costs or surprises, just honest work.',
    },
    {
      iconSrc: '/assets/group.svg',
      title: 'Partnership',
      description: 'We work with you, not just for you. Your business goals become our goals.',
    },
    {
      iconSrc: '/assets/rocket.svg',
      title: 'Agile Execution',
      description: 'Rapid delivery and iterative improvement for faster, better results.',
    },
  ];

  return (
    <section className={styles.whyUsSection} aria-labelledby="why-us-heading">
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <Typography
                    variant="h1"
                    component="h1"
                    style={{
                      textAlign: "center",
                      fontFamily: "Roboto",
                      fontSize: "var(--font-size-72, 72px)",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: " 80px",
                      letterSpacing: "var(--letter-spacing--1_8, -1.8px)",
                      margin: "0 0 60px 0",
                      animation: "fadeInUp 0.8s ease-out",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    className={styles.title}
                  >
                    <span
                      style={{
                        background: "linear-gradient(90deg, #D04A1D 0%, #D96A2B 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginTop: "0.5rem",
                        // opacity: mounted ? 1 : 0,
                        // transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                        transitionDelay: "0.3s",
                      }}
                    >
                     Why Axuraa?
                    </span>
          </Typography>
          
          <Typography
            variant="body1"
            component="p"
            className={styles.subtitle}
          >
            Our culture is built on principles that ensure we deliver not just code, but tangible business value.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {values.map((value, index) => (
            <Card
              key={index}
              icon={value.iconSrc}
              title={value.title}
              description={value.description}
              
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhyUs);