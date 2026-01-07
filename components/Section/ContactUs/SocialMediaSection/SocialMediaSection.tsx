'use client';

import React from 'react';
import Typography from '@/components/UI/Atoms/Typography/Typography';
import SocialMediaCard from '@/components/UI/Muscles/SocilaCard/SocialMediaCard';
import styles from './SocialMediaSection.module.css';
import { SocialMediaSectionProps } from '@/types/Generals/socialTypes';

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({
  title = 'Follow us on social media',
  subtitle = 'Stay up to date with our latest news and projects',
  platforms = [],
  className = '',
}) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography 
            variant="h3"
            component="h3"
            style={{
                textAlign: 'center',
                fontFamily: 'Roboto',
                fontSize: 'var(--font-size-72, 72px)',
                fontStyle: 'normal',
                fontWeight: 900,
                lineHeight: ' 100px',
                letterSpacing: 'var(--letter-spacing--1_8, -1.8px)',
                margin: "0 0 2rem 0",
                animation: "fadeInUp 0.8s ease-out",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Center content vertically
                alignItems: "center",
              }}
            >
           <span
              style={{
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "4rem",
                fontWeight: 900,
                lineHeight: "5rem",
                letterSpacing: "-1.442px",
              }}
            >
               {title}
            </span>
          </Typography>
          
          <Typography 
            variant="body1" 
            component="p" 
            className={styles.subtitle}
            align="center"
          >
            {subtitle}
          </Typography>
        </div>

        <div className={styles.cardsGrid}>
          {platforms.map((platform) => (
            <SocialMediaCard
              key={platform.name}
              Icon={platform.icon}
              label={platform.name}
              link={platform.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;