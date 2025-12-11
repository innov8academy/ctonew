import React from 'react';
import { QuotesSlideData } from '@monorepo/common';
import SlideContainer from './SlideContainer';
import styles from './QuotesSlide.module.css';

interface QuotesSlideProp {
  data: QuotesSlideData;
}

export default function QuotesSlide({ data }: QuotesSlideProp) {
  return (
    <SlideContainer className={styles.quotesSlide}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {data.title || 'Words That Moved You'}
        </h2>
      </div>

      <div className={styles.quotesCarousel}>
        {data.quotes.map((quote, index) => (
          <div
            key={index}
            className={styles.quoteCard}
            style={{
              '--gradient-seed': `${index * 60}deg`,
            } as React.CSSProperties}
          >
            <div className={styles.quoteMarkStart}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-7-3S3 3.75 3 5v7c0 7-4 8-7 8s-3 0-3-1m15 0c3 0 7-1 7-8V5c0-1.25-4.716-3-7-3s-7 1.75-7 3v7c0 7 4 8 7 8s3 0 3-1" />
              </svg>
            </div>
            <p className={styles.quoteText}>{quote.text}</p>
            {quote.author && (
              <p className={styles.quoteAuthor}>— {quote.author}</p>
            )}
            <div className={styles.quoteMarkEnd}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 3c0 1.25 4.716 3 7 3s7-1.75 7-3-4.716-3-7-3-7 1.75-7 3m0 16c0 1 0 1-3 1s-3-1-3-1V9c0-7-4-8-7-8S0 1 0 1s0 0 0 1v7c0 7 4 8 7 8s3 0 3-1" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}
