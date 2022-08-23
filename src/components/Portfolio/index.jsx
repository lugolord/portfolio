import styles from './index.module.css';
import React from 'react';
import toDoApp from '../../assets/projects/toDoAppResized.png';
import fnwReact from '../../assets/projects/fnwReactResized.png';
import fnwJs from '../../assets/projects/fnwJsResized.png';
import Project from '../Project';

export default function Portfolio() {
  return (
    <div className={styles.portfolioContainer} id='projects'>

      <h2>Proyectos</h2>

      <div className={styles.projectsContainer}>

        <Project preview={toDoApp} altText='to do app' title='To do app' 
        deployUrl='https://lugolord.github.io/toDoFuckingApp/' />

        <Project preview={fnwReact} altText='ecommerce with react' title='Ecommerce con react'
        deployUrl='https://lugolord.github.io/flatnwhiteReact/' 
        repoUrl='https://github.com/lugolord/flatnwhiteGonzalez' />

        <Project preview={fnwJs} altText='ecommerce with js' title='Ecommerce con JavaScript'
        deployUrl='https://lugolord.github.io/flatnwhite/pages/shop.html' 
        repoUrl='https://github.com/lugolord/flatnwhite' />

      </div>
      
    </div>
  );
}
