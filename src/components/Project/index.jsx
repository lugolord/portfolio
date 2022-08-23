import styles from './index.module.css';
import React from 'react';

export default function Project({ preview, altText, title, deployUrl, repoUrl }) {
  return (
    <div className={styles.project}>
      <img src={preview} alt={altText} />
      <h3>{title}</h3>
      <a className={styles.deployBtn} href={deployUrl} target='_blank' rel='noopener noreferrer'>Deploy</a>
      <a className={styles.repoBtn} href={repoUrl} target='_blank' rel='noopener noreferrer'>Repo</a>
    </div>
  );
}
