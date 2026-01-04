import React from 'react';
import styles from './ServicePackagesCard.module.css';
import Image from 'next/image';
import TrueIcon from '@/public/assets/trueicon.svg';

interface ServicePackagesCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  isPopular?: boolean;
  buttonText?: string;
  hasShadow?: boolean;
  showPopularBadge?: boolean;
  hasButtonBackground?: boolean;
}

const ServicePackagesCard: React.FC<ServicePackagesCardProps> = ({
  title,
  description,
  features,
  price,
  isPopular = false,
  buttonText = 'Get Started',
  hasShadow = true,
  showPopularBadge = true,
  hasButtonBackground = true,
}) => {
  return (
    <div className={`${styles.card} ${hasShadow ? styles.withShadow : ''} ${isPopular ? styles.isPopular : ''}`}>
      {isPopular && showPopularBadge && (
        <div className={styles.popularBadge}>Most Popular</div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <Image 
              src={TrueIcon} 
              alt="Included" 
              width={16} 
              height={16} 
              className={styles.featureIcon} 
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className={styles.price}>{price}</div>
      <button 
        className={`${styles.button} ${
          !hasButtonBackground ? styles.noBackground : ''
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default React.memo(ServicePackagesCard);