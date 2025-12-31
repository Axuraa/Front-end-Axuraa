import React from 'react';
import styles from './Alphabet.module.css';
import Letter from '../../Animations/Letter/Letter';
import { AlphabetProps } from '@/types/Generals/backgroundTypes';

const Alphabet: React.FC<AlphabetProps> = ({ className }) => {
  return (
    <div className={`${styles.alphabetContainer} ${className || ''}`}>
      {/* A - Appears: starts at position 1, on hover moves to position 2 with fade effect */}
      <Letter
        letter="A"
        animationType="appears"
        position={{ x: 10, y: 100 }}
        targetPosition={{ x: 10, y: 100 }}
        size={160}
        className={styles.letterA_1}
      />
       <Letter
        letter="A"
        animationType="appears"
        position={{ x: 900, y: -20 }}
        targetPosition={{ x: 900, y: -20 }}
        size={160}
        className={styles.letterA_2}
      />

      {/* R - Same as A (appears behavior) */}
      <Letter
        letter="R"
        animationType="appears"
        position={{ x: 900, y: -20 }}
        targetPosition={{ x: 900, y: -20 }}
        size={200}
        className={styles.letterR_1}
      />
      <Letter
        letter="R"
        animationType="appears"
        position={{ x: 10, y: 260 }}
        targetPosition={{ x: 10, y: 260 }}
        size={200}
        className={styles.letterR_2}
      />

      {/* X - Moves horizontal from position 1 to position 2 */}
      <Letter
        letter="X"
        animationType="moveHorizontal"
        position={{ x: 150, y: 300 }}
        targetPosition={{ x: 950, y: 300 }}
        size={120}
        className={styles.letterX}
      />

      {/* U - Moves diagonally from position 1 to position 2 */}
      <Letter
        letter="U"
        animationType="moveDiagonal"
        position={{ x: 950, y: 190 }}
        targetPosition={{ x: 10, y: -10 }}
        size={100}
        className={styles.letterU}
      />

      {/* Q - Called twice, both move diagonally */}
      <Letter
        letter="Q"
        animationType="moveDiagonal"
        position={{ x: 900, y: 300 }}
        targetPosition={{ x: 800, y: -6 }}
        size={90}
        className={styles.letterQ1}
      />
      <Letter
        letter="Q"
        animationType="moveDiagonal"
        position={{ x: 100, y: -10 }}
        targetPosition={{ x: 780, y: 320 }}
        size={90}
        className={styles.letterQ2}
      />
    </div>
  );
};

export default Alphabet;