import styles from './index.module.css';
import React from 'react';

export default function StackSlide() {
  return (
    <>
      <h2>Tecnologias</h2>
      <div className={styles.stackContainer}>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>Bootstrap</p>   
        <p>React</p>   
        <p>Git</p>   
        <p>Firebase</p>   
        <p>Figma</p>   
      </div>
    </>
  );
}