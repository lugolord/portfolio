import styles from './index.module.css';
import React from 'react';

export default function Certificate({ image, altText, title, url}) {
  return (
    <div className={styles.certificate}>
      <img src={image} alt={altText} />
      <h3>{title}</h3>
      <a href={url} target='_blank' rel='noopener noreferrer'>Ver en Coderhouse</a>
    </div>
  );
}
