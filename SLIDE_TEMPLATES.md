# Slide Templates - Spotify Wrapped Inspired Design System

This document describes the comprehensive slide template system created for building beautiful, responsive presentation slides inspired by Spotify Wrapped.

## 📋 Overview

The slide templates provide:

- **5 Slide Types**: Intro, Stats Overview, Top Prompts, Quotes, and Summary
- **Responsive Design**: Desktop, tablet, and mobile optimized
- **Dark Premium Theme**: Spotify-inspired color palette with vibrant accents
- **Smooth Animations**: Entrance animations and interactive effects
- **Presentation Controls**: Full navigation, auto-play, and keyboard shortcuts
- **Type-Safe**: Full TypeScript support with shared types

## 📁 File Structure

```
apps/frontend/src/
├── components/
│   └── slides/
│       ├── SlideContainer.tsx              # Base container
│       ├── SlideContainer.module.css       # Design system CSS
│       ├── IntroSlide.tsx                  # Intro slide
│       ├── IntroSlide.module.css
│       ├── StatsOverviewSlide.tsx          # Stats slide
│       ├── StatsOverviewSlide.module.css
│       ├── TopPromptsSlide.tsx             # Prompts slide
│       ├── TopPromptsSlide.module.css
│       ├── QuotesSlide.tsx                 # Quotes slide
│       ├── QuotesSlide.module.css
│       ├── SummarySlide.tsx                # Summary slide
│       ├── SummarySlide.module.css
│       ├── SlideRenderer.tsx               # Universal renderer
│       ├── SlidesPresentation.tsx          # Presentation container
│       ├── SlidesPresentation.module.css
│       └── README.md                       # Component documentation
└── app/
    ├── wrapped/
    │   └── page.tsx                        # Example page
    ├── globals.css                         # Global styles
    ├── layout.tsx
    └── ...

packages/common/src/
└── types.ts                                # Shared type definitions
```

## 🎨 Color Palette

### Primary Colors

| Name | Value | Usage |
|------|-------|-------|
| Primary (Spotify Green) | `#1db954` | Buttons, highlights, primary accents |
| Primary Dark | `#1aa34a` | Hover states, shadows |
| Primary Light | `#1ed760` | Bright accents, gradients |

### Background Colors

| Name | Value | Usage |
|------|-------|-------|
| BG Dark | `#0f0f0f` | Main background |
| BG Darker | `#050505` | Overlay, deepest backgrounds |
| BG Light | `#1e1e1e` | Cards, elevated elements |
| BG Lighter | `#282828` | Secondary elevated elements |

### Accent Colors

| Name | Value | Usage |
|------|-------|-------|
| Purple | `#b13ddb` | Alternative accent |
| Pink | `#ff6b6b` | Gradient component, vibrant accents |
| Orange | `#ff9500` | Warm accents |
| Blue | `#0ea5e9` | Cool accents |
| Teal | `#06b6d4` | Additional accent option |

### Text Colors

| Name | Value | Usage |
|------|-------|-------|
| Primary | `#ffffff` | Main text, headings |
| Secondary | `#b3b3b3` | Supporting text |
| Tertiary | `#7f7f7f` | Disabled, less important text |

## 📐 Typography

### Font Sizes

```css
--font-size-xs:    0.75rem   /* 12px */
--font-size-sm:    0.875rem  /* 14px */
--font-size-base:  1rem      /* 16px */
--font-size-lg:    1.25rem   /* 20px */
--font-size-xl:    1.5rem    /* 24px */
--font-size-2xl:   2rem      /* 32px */
--font-size-3xl:   2.5rem    /* 40px */
--font-size-4xl:   3rem      /* 48px */
--font-size-5xl:   3.5rem    /* 56px */
```

### Font Weights

```css
--font-weight-regular:    400
--font-weight-medium:     500
--font-weight-semibold:   600
--font-weight-bold:       700
--font-weight-extrabold:  800
```

### Font Families

```css
--font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...
--font-family-display: 'Circular', -apple-system, ...
```

## 📏 Spacing System

```css
--spacing-xs:    0.25rem   /* 4px */
--spacing-sm:    0.5rem    /* 8px */
--spacing-md:    1rem      /* 16px */
--spacing-lg:    1.5rem    /* 24px */
--spacing-xl:    2rem      /* 32px */
--spacing-2xl:   3rem      /* 48px */
--spacing-3xl:   4rem      /* 64px */
--spacing-4xl:   6rem      /* 96px */
```

## 🔄 Animations

### Built-in Animations

#### slideInDown
Elements fade in while sliding down from top.
```css
@keyframes slideInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### slideInUp
Elements fade in while sliding up from bottom.
```css
@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### float
Gentle floating animation for decorative elements.
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
```

#### pulse
Pulsing opacity and scale effect.
```css
@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
```

### Transitions

```css
--transition-fast:  150ms ease-in-out
--transition-base:  300ms ease-in-out
--transition-slow:  500ms ease-in-out
```

## 📱 Responsive Breakpoints

The design system includes three main breakpoints:

### Desktop (≥ 768px)
- Full slide dimensions
- Maximum font sizes
- Multi-column grids
- Full navigation controls

### Tablet (≤ 1024px)
- Reduced padding
- 2-column grids instead of 3
- Adjusted font sizes
- Full controls maintained

### Mobile (≤ 767px)
- Single column layouts
- Reduced font sizes (20-30% smaller)
- Compact spacing
- Touch-optimized controls (44px minimum)

### Small Mobile (≤ 480px)
- Extra reduced spacing
- Smallest font sizes
- Minimal padding
- Stacked layouts

## 🎬 Slide Types & Components

### 1. IntroSlide

**Purpose**: Opening slide to welcome users

**Props**:
```typescript
interface IntroSlideData {
  type: 'intro';
  userName: string;
  year?: number;
  tagline?: string;
  title?: string;
  subtitle?: string;
}
```

**Features**:
- Animated year badge with gradient
- Gradient-styled title with "Wrapped" highlight
- Custom tagline text
- Floating decorative circles
- Entrance animations with staggered timing

**Example**:
```tsx
<IntroSlide data={{
  type: 'intro',
  userName: 'Alex',
  year: 2024,
  tagline: 'Your Year in Music'
}} />
```

### 2. StatsOverviewSlide

**Purpose**: Display key metrics and statistics

**Props**:
```typescript
interface StatsOverviewSlideData {
  type: 'stats-overview';
  stats: SlideStatItem[];
  title?: string;
}

interface SlideStatItem {
  label: string;
  value: string | number;
  unit?: string;
}
```

**Features**:
- Responsive grid layout (auto-fit, minmax)
- Individual stat cards with unique accent colors
- Gradient text for values
- Glassmorphic design with backdrop filter
- Hover elevation and color change effects
- Staggered entrance animations

**Example**:
```tsx
<StatsOverviewSlide data={{
  type: 'stats-overview',
  title: 'Your Year by Numbers',
  stats: [
    { label: 'Minutes Listened', value: 45820, unit: 'min' },
    { label: 'Top Artists', value: 127 },
    { label: 'Songs Favorited', value: 342 }
  ]
}} />
```

### 3. TopPromptsSlide

**Purpose**: Display Q&A pairs with visual emphasis

**Props**:
```typescript
interface TopPromptsSlideData {
  type: 'top-prompts';
  prompts: SlidePrompt[];
  title?: string;
  subtitle?: string;
}

interface SlidePrompt {
  question: string;
  answer: string;
}
```

**Features**:
- Numbered cards (1, 2, 3, etc.)
- Gradient numbered badges with unique colors
- Left accent border that changes color per item
- Question and answer typography hierarchy
- Horizontal slide animation on hover
- Staggered animations

**Example**:
```tsx
<TopPromptsSlide data={{
  type: 'top-prompts',
  title: 'Top Questions',
  prompts: [
    {
      question: 'What was your favorite moment?',
      answer: 'Discovering new artists'
    }
  ]
}} />
```

### 4. QuotesSlide

**Purpose**: Display inspirational quotes

**Props**:
```typescript
interface QuotesSlideData {
  type: 'quotes';
  quotes: SlideQuote[];
  title?: string;
}

interface SlideQuote {
  text: string;
  author?: string;
}
```

**Features**:
- Gradient backgrounds unique to each quote (seeded by index)
- Decorative quote marks (SVG)
- Author attribution
- Hover elevation and scale effects
- Responsive grid layout (3 → 2 → 1 column)
- Glassmorphic card design

**Example**:
```tsx
<QuotesSlide data={{
  type: 'quotes',
  title: 'Words That Moved You',
  quotes: [
    {
      text: 'Music is the universal language.',
      author: 'Henry Wadsworth Longfellow'
    }
  ]
}} />
```

### 5. SummarySlide

**Purpose**: Closing slide with call-to-action

**Props**:
```typescript
interface SummarySlideData {
  type: 'summary';
  userName: string;
  year?: number;
  message?: string;
  title?: string;
  subtitle?: string;
}
```

**Features**:
- Personalized closing message
- Decorative pulsing dots above and below content
- Share buttons for social platforms
- Animated gradient buttons
- Responsive button layout (row → column)
- Engaging typography with animations

**Example**:
```tsx
<SummarySlide data={{
  type: 'summary',
  userName: 'Alex',
  year: 2024,
  message: 'Thanks for an amazing year'
}} />
```

## 🎮 SlidesPresentation Controls

The `SlidesPresentation` component provides full presentation functionality:

### Props
```typescript
interface SlidesPresentationProps {
  slides: SlideData[];
  autoPlay?: boolean;           // Enable auto-play (default: false)
  autoPlayDuration?: number;    // Milliseconds between slides (default: 5000)
}
```

### Navigation Controls

#### Visual Controls
- **← / → Buttons**: Navigate to previous/next slide
- **Indicator Dots**: Click to jump to specific slide
- **Slide Counter**: Shows current slide position
- **Auto-play Button**: Toggle auto-play mode (⏸ / ▶)

#### Keyboard Shortcuts
- **Right Arrow** / **D**: Next slide
- **Left Arrow** / **A**: Previous slide
- **Space**: Toggle auto-play
- **Number Keys**: Jump to specific slide

#### Mouse/Touch
- **Click Indicators**: Navigate to slide
- **Click Nav Buttons**: Go to previous/next slide
- **Click Auto-play Button**: Toggle auto-play

## 🔧 Usage Guide

### Basic Implementation

```tsx
'use client';

import SlidesPresentation from '@/components/slides/SlidesPresentation';
import type { SlideData } from '@monorepo/common';

export default function MyPresentation() {
  const slides: SlideData[] = [
    // Your slide data here
  ];

  return (
    <SlidesPresentation 
      slides={slides}
      autoPlay={false}
      autoPlayDuration={5000}
    />
  );
}
```

### With Multiple Slide Types

```tsx
import type {
  IntroSlideData,
  StatsOverviewSlideData,
  SummarySlideData
} from '@monorepo/common';

const slides: SlideData[] = [
  {
    type: 'intro',
    userName: 'Alex',
    year: 2024,
    tagline: 'Your Year in Music'
  } as IntroSlideData,
  
  {
    type: 'stats-overview',
    title: 'By the Numbers',
    stats: [
      { label: 'Minutes Streamed', value: 45000, unit: 'min' }
    ]
  } as StatsOverviewSlideData,
  
  {
    type: 'summary',
    userName: 'Alex',
    year: 2024,
    message: 'See you next year'
  } as SummarySlideData
];
```

### Custom Styling

All components use CSS modules for scoped styling. Override by:

1. Creating custom CSS modules
2. Importing alongside component styles
3. Using CSS variables for color/spacing customization

```tsx
import styles from './MySlide.module.css';
import slideStyles from '@/components/slides/IntroSlide.module.css';

export function MyCustomSlide() {
  return (
    <div className={`${slideStyles.intro} ${styles.custom}`}>
      {/* Content */}
    </div>
  );
}
```

## ♿ Accessibility Features

- **Semantic HTML**: Proper button and heading elements
- **ARIA Labels**: Navigation and control descriptions
- **Focus States**: Green outline on keyboard navigation
- **Color Contrast**: WCAG AA compliant text contrast ratios
- **Touch Targets**: 44px minimum for mobile buttons
- **Keyboard Navigation**: Full keyboard support

## 🚀 Performance Considerations

- **CSS Modules**: Scoped styles reduce CSS bloat
- **CSS-in-Motion**: Hardware-accelerated transforms (translate, scale)
- **Lazy Loading**: Next.js image optimization compatible
- **Code Splitting**: Component-based for route splitting
- **Animation Performance**: Uses GPU-accelerated properties

## 📋 Best Practices

1. **Data Structure**: Keep slides structured with proper types
2. **Content Length**: 
   - Stats: 4-6 items recommended
   - Quotes: 2-4 items for 3-column layout
   - Prompts: 3-5 items for readability
3. **Mobile Testing**: Always test on actual mobile devices
4. **Auto-play Duration**: 5-8 seconds recommended for user reading
5. **Color Contrast**: Maintain WCAG AA contrast for accessibility
6. **Image Optimization**: Use Next.js Image component for media

## 🔗 Related Files

- `/apps/frontend/src/components/slides/` - Component directory
- `/apps/frontend/src/app/wrapped/page.tsx` - Example implementation
- `/packages/common/src/types.ts` - Type definitions
- `/apps/frontend/src/app/globals.css` - Global styles

## 📚 Additional Resources

- Design inspiration: [Spotify Wrapped](https://spotify.com)
- Modern CSS techniques: CSS Grid, Flexbox, Custom Properties
- Animation best practices: GPU acceleration, timing functions
- Responsive design: Mobile-first approach with breakpoints

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Status**: Production Ready
