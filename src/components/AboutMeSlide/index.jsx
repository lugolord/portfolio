import styles from './index.module.css';
import React from 'react';

export default function AboutMeSlide() {
  return (
    <div className={styles.aboutMeContainer}>
      <div>
        <h2>Hobbies</h2>
        <p>🤖Anime</p>
        <p>🤑Inversiones</p>
        <p>👾Gaming</p>
        <p>☕Cafe</p>
      </div>
      <div>
        <h2>Idiomas</h2>
        <p>Español: nativo</p>
        <p>Inglés: básico</p>
      </div>
    </div>
  );
}
