import React from 'react';
import Image from 'next/image';
import styles from './StartButton.module.css';
import StartIconButtom from '@/public/assets/StartIconButtom.svg';
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
        {children}
        <span className={styles.iconWrapper}>
          <Image 
            src={StartIconButtom} 
            alt="Start" 
            width={20} 
            height={20} 
            className={styles.buttonIcon} 
          />
        </span>
      </span>
    </button>
  );
};

export default React.memo(StartButton);