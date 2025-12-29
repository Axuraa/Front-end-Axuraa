import React from 'react';
import Image from 'next/image';
import styles from './ViewButton.module.css';
import ViewIconButton from '@/public/assets/ViewIconbutton.svg';

interface ViewButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ViewButton: React.FC<ViewButtonProps> = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
   <button
  className={`${styles.viewButton} ${className}`}
  {...props}
>
  <span className={styles.buttonContent}>
    <Image 
      src={ViewIconButton} 
      alt="View" 
      width={20} 
      height={20} 
      className={styles.buttonIcon} 
    />
    <span className={styles.buttonText}>
      {children}
    </span>
  </span>
</button>
  );
};

export default React.memo(ViewButton);