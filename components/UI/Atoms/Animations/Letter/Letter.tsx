import React from 'react';
import Image from 'next/image';
import styles from './Letter.module.css';
import { LetterProps } from '@/types/Generals/backgroundTypes';
import A from '@/public/assets/letters/A.svg';
import R from '@/public/assets/letters/R.svg';
import X from '@/public/assets/letters/X.svg';
import U from '@/public/assets/letters/U.svg';
import Q from '@/public/assets/letters/Q.svg';

const Letter: React.FC<LetterProps> = ({ 
  letter, 
  animationType, 
  position, 
  targetPosition,
  size = 80,
  className 
}) => {
  const getAnimationClass = () => {
    if (animationType === 'appears') {
      return styles.appears;
    } else if (animationType === 'moveHorizontal') {
      return styles.moveHorizontal;
    } else if (animationType === 'moveDiagonal') {
      return styles.moveDiagonal;
    }
    return '';
  };

  const getLetterSVG = () => {
    switch(letter) {
      case 'A': return A;
      case 'R': return R;
      case 'X': return X;
      case 'U': return U;
      case 'Q': return Q;
      default: return A;
    }
  };

  // Calculate the translation distance for movement animations
  const translateX = targetPosition ? targetPosition.x - position.x : 0;
  const translateY = targetPosition ? targetPosition.y - position.y : 0;

  return (
    <div
      className={`${styles.letterContainer} ${getAnimationClass()} ${className || ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        '--translate-x': `${translateX}px`,
        '--translate-y': `${translateY}px`,
      } as React.CSSProperties}
    >
      <Image
        src={getLetterSVG()}
        alt={`Letter ${letter}`}
        className={styles.letter}
        fill
        priority
      />
    </div>
  );
};

export default Letter;