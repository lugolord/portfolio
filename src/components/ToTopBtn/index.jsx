import styles from './index.module.css';
import React from 'react';
import upBtn from '../../assets/icons/arrow-up-circle-fill.svg';

export default function ToTopBtn() {
  return (
    <a href='#home'>
      <img src={upBtn} alt='arrow icon' className={styles.topBtn} />
    </a>
  );
}
