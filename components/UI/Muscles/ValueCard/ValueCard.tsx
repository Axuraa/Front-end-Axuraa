import React from 'react';
import styles from './ValueCard.module.css';
import Image from 'next/image';

export interface ValueCardProps {
  icon: string;
//   iconSrc?: string;
  title: string;
  description: string;
  iconColor?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  iconColor = '#3b82f6'
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper} style={{ color: iconColor }}>
        <Image src={icon} alt={title} width={60} height={60} />
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default React.memo(ValueCard);