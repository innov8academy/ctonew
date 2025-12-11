import React from 'react';
import { IntroSlideData } from '@monorepo/common';
import SlideContainer from './SlideContainer';
import styles from './IntroSlide.module.css';

interface IntroSlideProps {
  data: IntroSlideData;
}

export default function IntroSlide({ data }: IntroSlideProps) {
  const year = data.year || new Date().getFullYear();
  const tagline = data.tagline || 'Your Year in Music';

  return (
    <SlideContainer className={styles.introSlide}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeText}>{year}</span>
        </div>

        <h1 className={styles.title}>
          {data.userName}&apos;s <span className={styles.highlight}>Wrapped</span>
        </h1>

        <p className={styles.tagline}>{tagline}</p>

        <div className={styles.decorativeElements}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>Swipe to explore your musical journey</p>
      </div>
    </SlideContainer>
  );
}
