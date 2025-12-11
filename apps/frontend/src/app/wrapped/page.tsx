'use client';

import React from 'react';
import {
  IntroSlideData,
  StatsOverviewSlideData,
  TopPromptsSlideData,
  QuotesSlideData,
  SummarySlideData,
} from '@monorepo/common';
import SlidesPresentation from '@/components/slides/SlidesPresentation';

const mockSlides = [
  {
    type: 'intro',
    userName: 'Alex',
    year: 2024,
    tagline: 'Your Year in Music',
  } as IntroSlideData,

  {
    type: 'stats-overview',
    title: 'Your Year by Numbers',
    stats: [
      { label: 'Total Minutes Listened', value: 45820, unit: 'min' },
      { label: 'Top Artists Discovered', value: 127 },
      { label: 'Songs Added to Favorites', value: 342 },
      { label: 'Playlists Created', value: 24 },
      { label: 'Days You Were Most Active', value: 'Fridays', unit: '' },
      { label: 'Peak Listening Hour', value: '10 PM', unit: '' },
    ],
  } as StatsOverviewSlideData,

  {
    type: 'top-prompts',
    title: 'Questions That Defined Your Year',
    prompts: [
      {
        question: 'What was your favorite moment this year?',
        answer: 'Discovering new music genres and expanding my taste',
      },
      {
        question: 'Which artist surprised you the most?',
        answer: 'An indie artist with incredible emotional depth',
      },
      {
        question: 'What song captures your 2024?',
        answer: 'A timeless classic that brings back memories',
      },
    ],
  } as TopPromptsSlideData,

  {
    type: 'quotes',
    title: 'Words That Moved You',
    quotes: [
      {
        text: 'Music is the universal language of mankind.',
        author: 'Henry Wadsworth Longfellow',
      },
      {
        text: 'Where words fail, music speaks.',
        author: 'Hans Christian Andersen',
      },
      {
        text: 'Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.',
        author: 'Plato',
      },
    ],
  } as QuotesSlideData,

  {
    type: 'summary',
    userName: 'Alex',
    year: 2024,
    message: 'Thanks for streaming with us. Cheers to another year of great music.',
  } as SummarySlideData,
];

export default function WrappedPage() {
  return <SlidesPresentation slides={mockSlides} autoPlay={false} />;
}
