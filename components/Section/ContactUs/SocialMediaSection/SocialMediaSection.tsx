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
            variant="h4"
            component="h4"
            className={styles.title}
            >
           <span>
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