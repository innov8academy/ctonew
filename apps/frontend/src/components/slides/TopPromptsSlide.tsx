import React from 'react';
import { TopPromptsSlideData } from '@monorepo/common';
import SlideContainer from './SlideContainer';
import styles from './TopPromptsSlide.module.css';

interface TopPromptsSlideProps {
  data: TopPromptsSlideData;
}

export default function TopPromptsSlide({ data }: TopPromptsSlideProps) {
  const accentColors = [
    'var(--color-primary)',
    'var(--color-accent-purple)',
    'var(--color-accent-pink)',
  ];

  return (
    <SlideContainer className={styles.promptsSlide}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {data.title || 'Top Questions'}
        </h2>
        <p className={styles.subtitle}>
          How you answered defines your year
        </p>
      </div>

      <div className={styles.promptsList}>
        {data.prompts.map((prompt, index) => (
          <div
            key={index}
            className={styles.promptItem}
            style={{
              '--prompt-color': accentColors[index % accentColors.length],
            } as React.CSSProperties}
          >
            <div className={styles.promptNumber}>{index + 1}</div>
            <div className={styles.promptContent}>
              <h3 className={styles.promptQuestion}>{prompt.question}</h3>
              <p className={styles.promptAnswer}>{prompt.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}
