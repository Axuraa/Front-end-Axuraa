import React from 'react';
import styles from './AnimatedBackground.module.css';
import { BackgroundProps } from '@/types/Generals/backgroundTypes';
import Hexagon from '../../Animations/Hexagon/Hexagon';
import Circle from '../../Animations/Circles/Circles';
import AnimatedAlphabet from './Alphabet';

const AnimatedBackground: React.FC<BackgroundProps> = ({ type, className }) => {
  return (
    <div className={styles.animatedBackground}>
      <div className={className}>
        {type === 'Hexagon' && (
          <div className={styles.HexagonContainer}>
            <Hexagon 
              width={450} 
              height={450} 
              className={styles.Hexa_1} 
              direction='left' 
              position='down'
            />
            <Hexagon 
              width={450} 
              height={450} 
              className={styles.Hexa_2} 
              direction='right' 
              position='up'
            />
          </div>
        )}
        
        {type === 'Circle' && (
          <div className={styles.CircleContainer}>
            <Circle 
              width={300} 
              height={300} 
              className={styles.Circle_1} 
              direction='left' 
              position='down'
            />
            <Circle 
              width={300} 
              height={300} 
              className={styles.Circle_2} 
              direction='right' 
              position='up'
            />
          </div>
        )}

        {type === 'Alphabet' && (
          <AnimatedAlphabet />
        )}
      </div>
    </div>
  );
};

export default AnimatedBackground;