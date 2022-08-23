import 'swiper/css';
import styles from './index.module.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import WelcomeSlide from '../WelcomeSlide';
import StackSlide from '../StackSlide';
import AboutMeSlide from '../AboutMeSlide';

export default function AboutSwiper() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} className={styles.swiperContainer}>

      <SwiperSlide className={styles.aboutContainer}>
        <WelcomeSlide/>
      </SwiperSlide>

      <SwiperSlide className={styles.stackContainer}>
        <StackSlide/>
      </SwiperSlide>

      <SwiperSlide className={styles.aboutMeContainer}>
        <AboutMeSlide/>
      </SwiperSlide>

    </Swiper>
  );
}