export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export type ApiError = {
  statusCode: number;
  message: string;
  details?: unknown;
};

// Slide template types
export interface SlideStatItem {
  label: string;
  value: string | number;
  unit?: string;
}

export interface SlideQuote {
  text: string;
  author?: string;
}

export interface SlidePrompt {
  question: string;
  answer: string;
}

export interface SlideData {
  type: 'intro' | 'stats-overview' | 'top-prompts' | 'quotes' | 'summary';
  title?: string;
  subtitle?: string;
  content?: unknown;
}

export interface IntroSlideData extends SlideData {
  type: 'intro';
  userName: string;
  year?: number;
  tagline?: string;
}

export interface StatsOverviewSlideData extends SlideData {
  type: 'stats-overview';
  stats: SlideStatItem[];
}

export interface TopPromptsSlideData extends SlideData {
  type: 'top-prompts';
  prompts: SlidePrompt[];
}

export interface QuotesSlideData extends SlideData {
  type: 'quotes';
  quotes: SlideQuote[];
}

export interface SummarySlideData extends SlideData {
  type: 'summary';
  userName: string;
  year?: number;
  message?: string;
}
