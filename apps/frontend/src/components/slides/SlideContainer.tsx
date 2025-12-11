import React from 'react';
import styles from './SlideContainer.module.css';

interface SlideContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SlideContainer({
  children,
  className,
}: SlideContainerProps) {
  return (
    <div className={`${styles.slideContainer} ${className || ''}`}>
      {children}
    </div>
  );
}
