import React, { useState, useEffect } from 'react';
import styles from './SpriteAnimationCharacter.module.scss' 

const SpriteAnimationCharacter = () => {
    const [characterClass, setCharacterClass] = useState(`${styles.faceDown}`);
  
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
          setCharacterClass(`${styles.faceLeft}`);
        } else if (event.key === 'ArrowRight') {
          setCharacterClass(`${styles.faceRight}`);
        } else if (event.key === 'ArrowUp') {
          setCharacterClass(`${styles.faceUp}`);
        } else if (event.key === 'ArrowDown') {
          setCharacterClass(`${styles.faceDown}`);
        }
      };
  
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    return (
      <div className={styles.character}>
        <img
          className={`${styles.characterShadow} ${styles.pixelart}`}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png"
          alt="Shadow"
        />
        <img className={`${styles.characterSpritesheet} ${styles.pixelart} ${characterClass}`} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png" alt="Character" />
      </div>
    );
  };
  
  export default SpriteAnimationCharacter;