import React from 'react';
import { SummarySlideData } from '@monorepo/common';
import SlideContainer from './SlideContainer';
import styles from './SummarySlide.module.css';

interface SummarySlideProp {
  data: SummarySlideData;
}

export default function SummarySlide({ data }: SummarySlideProp) {
  const year = data.year || new Date().getFullYear();
  const message = data.message || 'Thank you for an amazing year';

  return (
    <SlideContainer className={styles.summarySlide}>
      <div className={styles.content}>
        <div className={styles.decorativeTop}>
          <div className={styles.decorElement}></div>
          <div className={styles.decorElement}></div>
          <div className={styles.decorElement}></div>
        </div>

        <h1 className={styles.title}>
          {data.userName}, your {year} was unforgettable
        </h1>

        <p className={styles.message}>{message}</p>

        <div className={styles.shareSection}>
          <p className={styles.shareText}>Share your wrapped story</p>
          <div className={styles.shareButtons}>
            <button className={styles.shareButton}>
              <span>Share on</span> X
            </button>
            <button className={styles.shareButton}>
              <span>Share on</span> Instagram
            </button>
            <button className={styles.shareButton}>
              <span>Share on</span> Facebook
            </button>
          </div>
        </div>

        <div className={styles.decorativeBottom}>
          <div className={styles.decorElement}></div>
          <div className={styles.decorElement}></div>
          <div className={styles.decorElement}></div>
        </div>
      </div>
    </SlideContainer>
  );
}
