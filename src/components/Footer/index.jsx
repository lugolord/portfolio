import styles from './index.module.css';
import React from 'react';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import githubIcon from '../../assets/icons/github.svg';

export default function Footer() {
  return (
    <footer className={styles.appFooter}>
      <h2>Conecta</h2>
      <div>
        <a href='https://www.linkedin.com/in/lugolord/' target='_blank' rel='noopener noreferrer'>
          <img src={linkedinIcon} alt='linkedin icon' className={styles.icon} />
        </a>
        <a href='https://github.com/lugolord' target='_blank' rel='noopener noreferrer'>
          <img src={githubIcon} alt='github icon' className={styles.icon} />
        </a>
      </div>
    </footer>
  );
}
