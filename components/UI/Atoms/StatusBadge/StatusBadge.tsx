import React, { CSSProperties } from 'react';
import styles from './StatusBadge.module.css';

interface StatusBadgeProps {
  text: string;
  style?: CSSProperties;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  text, 
  style,
  className = '' 
}) => {
  // التنسيقات الافتراضية
  const defaultStyles: CSSProperties = {
    display: 'inline-flex',
    padding: '4px 12px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    border: '1px solid rgba(208, 74, 29, 0.2)',
    background: 'rgba(208, 74, 29, 0.1)',
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
  };

  const combinedStyles = { ...defaultStyles, ...style };

  return (
    <div 
      className={`${styles.statusBadge} ${className}`} 
      style={combinedStyles}
    >
      <span 
        className={styles.badgeText}
        style={{
          color: '#D04A1D',
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          fontWeight: 700,
          lineHeight: '16px',
          margin: 0,
          padding: 0
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default React.memo(StatusBadge);