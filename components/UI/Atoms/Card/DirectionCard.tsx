'use client';

/**
 * ===== Card Component =====
 * A reusable card component with hover effects and customizable content.
 * Features:
 * - Customizable icon, title, description, and link
 * - Smooth hover animations
 * - Responsive design
 */

import React, { useState } from 'react';
import styles from './DirectionCard.module.css';

interface CardProps {
  icon?: React.ReactNode;
  iconSrc?: string;  
  title: string;
  description: string;
  link?: string;
  borderRadius?: string;
}

const DirectionCard: React.FC<CardProps> = ({
   icon,
  iconSrc = "/assets/DirectionIcon.svg",  
  title,
  description,
  link = "Read more >",
  borderRadius = "0 0 68.087px 0"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Main card container with hover state handling
    // Uses CSS modules for styling and applies hover class when isHovered is true
    <div 
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      style={{ '--card-border-radius': borderRadius } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article" // Better accessibility
      aria-label={title} // Better accessibility
    >
      {/* Decorative background layers for visual effect */}
      {/* <div className={styles.dotsLayer1} aria-hidden="true" />
      <div className={styles.dotsLayer2} aria-hidden="true" />
      <div className={styles.dotsLayer3} aria-hidden="true" /> */}

      {/* Main content area of the card */}
      <div className={styles.content}>
        {/* Icon section - falls back to default shield icon if none provided */} 
         
         <div className={styles.iconWrapper}>
           {icon || (
              <img 
                src={iconSrc || "/assets/DirectionIcon.svg"} 
                alt={title || 'Card icon'} 
                className={styles.cardIcon}
              />
           )}
        </div>

        {/* Card title and description */}

        <h2 className={styles.title}>{title}</h2>


         <p className={styles.description}>{description}</p>

      </div>
    </div>
  );
};



export default React.memo(DirectionCard);
