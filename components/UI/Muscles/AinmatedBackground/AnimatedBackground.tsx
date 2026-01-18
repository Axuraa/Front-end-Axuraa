import React, { useState, useEffect } from 'react';
import styles from './AnimatedBackground.module.css';
import { BackgroundProps } from '@/types/Generals/backgroundTypes';
import Hexagon from '@/components/UI/Atoms/Animations/Hexagon/Hexagon';
import Circle from '@/components/UI/Atoms/Animations/Circles/Circles';
import AnimatedAlphabet from './Alphabet';

interface AnimatedBackgroundProps extends BackgroundProps {
  isHovered?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  type, 
  className,
  isHovered = false 
}) => {
  const [shapeSize, setShapeSize] = useState({ width: 450, height: 450 });

  useEffect(() => {
    const updateShapeSize = () => {
      const width = window.innerWidth;
      
      let size;
      if (width >= 1200) {
        size = { width: 450, height: 450 };
      } else if (width >= 1024) {
        size = { width: 400, height: 400 };
      } else if (width >= 768) {
        size = { width: 350, height: 350 };
      } else if (width >= 600) {
        size = { width: 300, height: 300 };
      } else if (width >= 480) {
        size = { width: 250, height: 250 };
      } else {
        size = { width: 200, height: 200 };
      }
      
      setShapeSize(size);
    };

    // Initial size
    updateShapeSize();

    // Listen for window resize
    window.addEventListener('resize', updateShapeSize);

    // Cleanup
    return () => window.removeEventListener('resize', updateShapeSize);
  }, []);

  return (
    <div className={`${styles.animatedBackground} ${isHovered ? styles.hovered : ''}`}>
      <div className={className}>
        {type === 'Hexagon' && (
          <div className={styles.HexagonContainer}>
            <Hexagon 
              width={shapeSize.width} 
              height={shapeSize.height} 
              className={styles.Hexa_1} 
              direction='left' 
              position='down'
            />
            <Hexagon 
              width={shapeSize.width} 
              height={shapeSize.height} 
              className={styles.Hexa_2} 
              direction='right' 
              position='up'
            />
          </div>
        )}
        
        {type === 'Circle' && (
          <div className={styles.CircleContainer}>
            <Circle 
              width={shapeSize.width * 0.67} 
              height={shapeSize.height * 0.67} 
              className={styles.Circle_1} 
              direction='left' 
              position='down'
            />
            <Circle 
              width={shapeSize.width * 0.67} 
              height={shapeSize.height * 0.67} 
              className={styles.Circle_2} 
              direction='right' 
              position='up'
            />
          </div>
        )}

        {type === 'Alphabet' && (
          <AnimatedAlphabet isHovered={isHovered} />
        )}
      </div>
    </div>
  );
};

export default AnimatedBackground;