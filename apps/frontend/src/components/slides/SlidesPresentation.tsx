'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { SlideData } from '@monorepo/common';
import SlideRenderer from './SlideRenderer';
import styles from './SlidesPresentation.module.css';

interface SlidesPresentationProps {
  slides: SlideData[];
  autoPlay?: boolean;
  autoPlayDuration?: number;
}

export default function SlidesPresentation({
  slides,
  autoPlay = false,
  autoPlayDuration = 5000,
}: SlidesPresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(nextSlide, autoPlayDuration);
    return () => clearTimeout(timer);
  }, [currentSlide, isAutoPlaying, autoPlayDuration, nextSlide]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, isAutoPlaying]);

  return (
    <div className={styles.presentation}>
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
          >
            <SlideRenderer data={slide} />
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.navButton}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.active : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          className={styles.navButton}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <div className={styles.slideCounter}>
        <span>
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      <button
        className={styles.autoPlayButton}
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        title={isAutoPlaying ? 'Pause' : 'Play'}
      >
        {isAutoPlaying ? '⏸' : '▶'}
      </button>
    </div>
  );
}
