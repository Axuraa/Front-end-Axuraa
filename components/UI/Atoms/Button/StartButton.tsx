import React from 'react';
import Image from 'next/image';
import styles from './StartButton.module.css';
import { StartButtonProps } from '@/types/Generals/buttonTypes';

const StartButton: React.FC<StartButtonProps> = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`${styles.startButton} ${className}`}
      {...props}
    >
      <span className={styles.buttonContent}>
        <span className={styles.buttonText}>
          {children}
        </span>
        <span className={styles.iconWrapper}>
          <Image 
            src="/assets/StartIconButtom.svg" 
            alt="Start" 
            width={20} 
            height={20} 
            className={styles.buttonIcon}
            style={{ width: 'auto', height: 'auto' }}
          />
        </span>
      </span>
    </button>
  );
};

export default React.memo(StartButton);