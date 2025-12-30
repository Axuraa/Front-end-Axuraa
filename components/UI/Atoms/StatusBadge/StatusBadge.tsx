import React from 'react';
import styles from './StatusBadge.module.css';
import { SectionBadgeProps } from '@/types/HomePage/contactTypes';


const StatusBadge: React.FC<SectionBadgeProps> = ({ 
  text, 
  style,
  className = '' 
}) => {
  return (
    <div 
      className={`${styles.statusBadge} ${className}`} 
      style={style}
    >
      {text}
    </div>
  );
};
export default React.memo(StatusBadge);