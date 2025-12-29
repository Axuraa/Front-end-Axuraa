import React from 'react';
import styles from './StatusBadge.module.css';
interface SectionBadgeProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}
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