import React from 'react';
import styles from './AnimatedBackground.module.css';
import { BackgroundProps } from '@/types/Generals/backgroundTypes';
import Hexagon from '../../Animations/Hexagon/Hexagon';

const AnimatedBackground: React.FC<BackgroundProps> = ({ type, className }) => {
  return (
    <div className={styles.animatedBackground}>
      <div className={className}>
        {type === 'Hexagon' && (
          <div className={styles.HexagonContainer}>
            <Hexagon 
              width={400} 
              height={400} 
              className={styles.Hexa_1} 
              direction='left' 
              position='down'
            />
            <Hexagon 
              width={400} 
              height={400} 
              className={styles.Hexa_2} 
              direction='right' 
              position='up'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedBackground;