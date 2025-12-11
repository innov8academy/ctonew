import React from 'react';
import {
  SlideData,
  IntroSlideData,
  StatsOverviewSlideData,
  TopPromptsSlideData,
  QuotesSlideData,
  SummarySlideData,
} from '@monorepo/common';
import IntroSlide from './IntroSlide';
import StatsOverviewSlide from './StatsOverviewSlide';
import TopPromptsSlide from './TopPromptsSlide';
import QuotesSlide from './QuotesSlide';
import SummarySlide from './SummarySlide';

interface SlideRendererProps {
  data: SlideData;
}

export default function SlideRenderer({ data }: SlideRendererProps) {
  switch (data.type) {
    case 'intro':
      return <IntroSlide data={data as IntroSlideData} />;
    case 'stats-overview':
      return <StatsOverviewSlide data={data as StatsOverviewSlideData} />;
    case 'top-prompts':
      return <TopPromptsSlide data={data as TopPromptsSlideData} />;
    case 'quotes':
      return <QuotesSlide data={data as QuotesSlideData} />;
    case 'summary':
      return <SummarySlide data={data as SummarySlideData} />;
    default: {
      const _exhaustive: never = data.type;
      return _exhaustive;
    }
  }
}
