import React from 'react';
import { StatsOverviewSlideData } from '@monorepo/common';
import SlideContainer from './SlideContainer';
import styles from './StatsOverviewSlide.module.css';

interface StatsOverviewSlideProps {
  data: StatsOverviewSlideData;
}

export default function StatsOverviewSlide({ data }: StatsOverviewSlideProps) {
  const accentColors = [
    'var(--color-primary)',
    'var(--color-accent-purple)',
    'var(--color-accent-pink)',
    'var(--color-accent-blue)',
    'var(--color-accent-teal)',
    'var(--color-accent-orange)',
  ];

  return (
    <SlideContainer className={styles.statsSlide}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {data.title || 'Your Year by Numbers'}
        </h2>
      </div>

      <div className={styles.statsGrid}>
        {data.stats.map((stat, index) => (
          <div
            key={index}
            className={styles.statCard}
            style={{
              '--accent-color': accentColors[index % accentColors.length],
            } as React.CSSProperties}
          >
            <div className={styles.statValue}>
              {stat.value}
              {stat.unit && <span className={styles.unit}>{stat.unit}</span>}
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}
