import styles from './index.module.css';
import React from 'react';
import reactCertificate from '../../assets/certificates/reactResized.png';
import jsCertificate from '../../assets/certificates/jsResized.png';
import dwCertificate from '../../assets/certificates/dwResized.png';
import Certificate from '../Certificate';

export default function Studies() {
  return (
    <div className={styles.studies} id='studies'>

      <h2>Estudios</h2>

      <div className={styles.certificates}>

        <Certificate image={reactCertificate} altText='react certificate' title='React' 
        url='https://www.coderhouse.com/certificados/614952533e71490011325192'/>

        <Certificate image={jsCertificate} altText='javascript certificate' title='JavaScript' 
        url='https://www.coderhouse.com/certificados/6081ed5d7ca21e0096ac4182'/>

        <Certificate image={dwCertificate} altText='desarrollo web certificate' title='Desarrollo web' 
        url='https://www.coderhouse.com/certificados/60095b308326b1008f1a93a6'/>

      </div>

    </div>
  );
}
