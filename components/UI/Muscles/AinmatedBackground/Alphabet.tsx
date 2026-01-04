import React from 'react';
import styles from './Alphabet.module.css';
import Letter from '@/components/UI/Atoms/Animations/Letter/Letter';
import { AlphabetProps } from '@/types/Generals/backgroundTypes';

const Alphabet: React.FC<AlphabetProps> = ({ className }) => {
  return (
    <div className={`${styles.alphabetContainer} ${className || ''}`}>
      {/* A - Appears: starts at position 1, on hover moves to position 2 with fade effect */}
      <Letter
        letter="A"
        animationType="appears"
        position={{ x: 2, y: 130 }}
        targetPosition={{ x: 2, y: 130 }}
        size={180}
        className={styles.letterA_1}
      />
       <Letter
        letter="A"
        animationType="appears"
        position={{ x: 900, y: -100 }}
        targetPosition={{ x: 900, y: -100 }}
        size={200}
        className={styles.letterA_2}
      />

      {/* R - Same as A (appears behavior) */}
      <Letter
        letter="R"
        animationType="appears"
        position={{ x: 900, y: -100 }}
        targetPosition={{ x: 900, y: -100 }}
        size={220}
        className={styles.letterR_1}
      />
      <Letter
        letter="R"
        animationType="appears"
        position={{ x: 10, y: 280 }}
        targetPosition={{ x: 10, y: 280 }}
        size={220}
        className={styles.letterR_2}
      />

      {/* X - Moves horizontal from position 1 to position 2 */}
      <Letter
        letter="X"
        animationType="moveHorizontal"
        position={{ x: 300, y: 380 }}
        targetPosition={{ x: 950, y: 380 }}
        size={180}
        className={styles.letterX}
      />

      {/* U - Moves diagonally from position 1 to position 2 */}
      <Letter
        letter="U"
        animationType="moveDiagonal"
        position={{ x: 1050, y: 210 }}
        targetPosition={{ x: 10, y: -30 }}
        size={120}
        className={styles.letterU}
      />

      {/* Q - Called twice, both move diagonally */}
      <Letter
        letter="Q"
        animationType="moveDiagonal"
        position={{ x: 880, y: 380 }}
        targetPosition={{ x: 780, y: -26 }}
        size={120}
        className={styles.letterQ1}
      />
      <Letter
        letter="Q"
        animationType="moveDiagonal"
        position={{ x: 130, y: -30 }}
        targetPosition={{ x: 780, y: 290 }}
        size={120}
        className={styles.letterQ2}
      />
    </div>
  );
};

export default Alphabet;