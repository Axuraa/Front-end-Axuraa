import React from 'react';
import styles from './ServiceCard.module.css';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id,
  title, 
  description, 
  features,
  iconUrl = '/assets/safeicon.svg',
  buttonText = 'Learn More',
  onButtonClick
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      // Extract locale from current pathname
      const locale = pathname?.split('/')[1] || 'en';
      router.push(`/${locale}/service/${id}`);
    }
  };

  return (
    <div className={styles.serviceCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          <Image 
            src={iconUrl} 
            alt={title} 
            width={28} 
            height={28}
            className={styles.safeIcon}
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      
      <p className={styles.description}>{description}</p>
      
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <Image 
              src="/assets/trueicon.svg" 
              alt="check" 
              width={16} 
              height={16}
              className={styles.checkIcon}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={styles.learnMoreButton}
        onClick={handleButtonClick}
      >
        {buttonText}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default React.memo(ServiceCard);