# Spotify Wrapped-Inspired Slide Templates

A complete design system and React component library for creating beautiful, responsive slide presentations inspired by Spotify Wrapped. All slides feature a dark, premium aesthetic with vibrant accent colors and smooth animations.

## 📦 Components

### Core Components

#### **SlideContainer**
Base container component for all slides. Provides the full-screen dark gradient background and design system CSS variables.

```tsx
import SlideContainer from '@/components/slides/SlideContainer';

<SlideContainer>
  <div>Your content here</div>
</SlideContainer>
```

#### **IntroSlide**
Welcome/title slide introducing the user and setting the tone for the presentation.

```tsx
import IntroSlide from '@/components/slides/IntroSlide';
import type { IntroSlideData } from '@monorepo/common';

const data: IntroSlideData = {
  type: 'intro',
  userName: 'Alex',
  year: 2024,
  tagline: 'Your Year in Music'
};

<IntroSlide data={data} />
```

**Features:**
- Animated badge showing the year
- Gradient-styled title with "Wrapped" highlight
- Custom tagline
- Floating decorative circles with animations
- Footer text with pulse animation

#### **StatsOverviewSlide**
Display key statistics and metrics in an attractive grid layout.

```tsx
import StatsOverviewSlide from '@/components/slides/StatsOverviewSlide';
import type { StatsOverviewSlideData } from '@monorepo/common';

const data: StatsOverviewSlideData = {
  type: 'stats-overview',
  title: 'Your Year by Numbers',
  stats: [
    { label: 'Total Minutes Listened', value: 45820, unit: 'min' },
    { label: 'Top Artists', value: 127 },
    { label: 'Favorite Songs', value: 342 }
  ]
};

<StatsOverviewSlide data={data} />
```

**Features:**
- Responsive grid layout (auto-fit columns)
- Individual stat cards with accent colors
- Hover effects with elevation
- Gradient text for values
- Glassmorphic design with blur effects

#### **TopPromptsSlide**
Display Q&A pairs with numbered cards and accent colors.

```tsx
import TopPromptsSlide from '@/components/slides/TopPromptsSlide';
import type { TopPromptsSlideData } from '@monorepo/common';

const data: TopPromptsSlideData = {
  type: 'top-prompts',
  title: 'Top Questions',
  prompts: [
    { question: 'What was your favorite moment?', answer: 'Discovering new artists' },
    { question: 'Which song captures your year?', answer: 'A timeless classic' }
  ]
};

<TopPromptsSlide data={data} />
```

**Features:**
- Numbered cards with accent colors
- Left border accent bar
- Question and answer typography
- Hover effects with slide animation
- Staggered animations on load

#### **QuotesSlide**
Display inspirational quotes in elegant cards.

```tsx
import QuotesSlide from '@/components/slides/QuotesSlide';
import type { QuotesSlideData } from '@monorepo/common';

const data: QuotesSlideData = {
  type: 'quotes',
  title: 'Words That Moved You',
  quotes: [
    { text: 'Music is the universal language.', author: 'Author Name' }
  ]
};

<QuotesSlide data={data} />
```

**Features:**
- Gradient backgrounds unique to each card
- Quote mark decorations
- Author attribution
- Smooth hover animations
- Responsive card layout

#### **SummarySlide**
Closing slide with call-to-action and share buttons.

```tsx
import SummarySlide from '@/components/slides/SummarySlide';
import type { SummarySlideData } from '@monorepo/common';

const data: SummarySlideData = {
  type: 'summary',
  userName: 'Alex',
  year: 2024,
  message: 'Thanks for an amazing year'
};

<SummarySlide data={data} />
```

**Features:**
- Personalized closing message
- Share buttons for social media
- Decorative pulsing dots
- Animated gradient buttons
- Mobile-optimized button layout

#### **SlideRenderer**
Universal component that renders any slide type based on its data.

```tsx
import SlideRenderer from '@/components/slides/SlideRenderer';
import type { SlideData } from '@monorepo/common';

const data: SlideData = /* any slide type */;

<SlideRenderer data={data} />
```

#### **SlidesPresentation**
Full presentation container with navigation, controls, and auto-play.

```tsx
import SlidesPresentation from '@/components/slides/SlidesPresentation';
import type { SlideData } from '@monorepo/common';

const slides: SlideData[] = [/* your slides */];

<SlidesPresentation 
  slides={slides} 
  autoPlay={false}
  autoPlayDuration={5000}
/>
```

**Features:**
- Arrow button navigation (← →)
- Indicator dots with click navigation
- Keyboard controls (arrow keys, spacebar)
- Auto-play with configurable duration
- Slide counter
- Smooth fade transitions

## 🎨 Design System

### Color Palette

The design system uses a Spotify Wrapped-inspired dark theme with vibrant accents:

```css
/* Primary Colors */
--color-primary: #1db954 (Spotify Green)
--color-primary-dark: #1aa34a
--color-primary-light: #1ed760

/* Backgrounds */
--color-bg-dark: #0f0f0f (Main background)
--color-bg-darker: #050505
--color-bg-light: #1e1e1e
--color-bg-lighter: #282828

/* Accent Colors */
--color-accent-purple: #b13ddb
--color-accent-pink: #ff6b6b
--color-accent-orange: #ff9500
--color-accent-blue: #0ea5e9
--color-accent-teal: #06b6d4

/* Text Colors */
--color-text-primary: #ffffff
--color-text-secondary: #b3b3b3
--color-text-tertiary: #7f7f7f
```

### Typography

```css
/* Font Family */
--font-family-primary: System fonts stack
--font-family-display: Circular-inspired

/* Font Sizes (rem-based) */
--font-size-xs: 0.75rem
--font-size-sm: 0.875rem
--font-size-base: 1rem
--font-size-lg: 1.25rem
--font-size-xl: 1.5rem
--font-size-2xl: 2rem
--font-size-3xl: 2.5rem
--font-size-4xl: 3rem
--font-size-5xl: 3.5rem

/* Font Weights */
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

### Spacing Scale

```css
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-2xl: 3rem
--spacing-3xl: 4rem
--spacing-4xl: 6rem
```

### Animations

Pre-built animations included:
- `slideInDown` - Elements slide down with fade
- `slideInUp` - Elements slide up with fade
- `float` - Gentle floating motion
- `pulse` - Opacity and scale pulsing

## 📱 Responsive Design

All components are fully responsive:

- **Desktop (≥768px):** Full-size layouts with all features
- **Tablet (≤1024px):** Adjusted grid columns and padding
- **Mobile (≤767px):** Single column layouts, reduced font sizes
- **Small Mobile (≤480px):** Optimized touch targets, stacked layouts

## 🚀 Usage Example

```tsx
'use client';

import SlidesPresentation from '@/components/slides/SlidesPresentation';
import type {
  IntroSlideData,
  StatsOverviewSlideData,
  SummarySlideData
} from '@monorepo/common';

export default function WrappedPage() {
  const slides = [
    {
      type: 'intro',
      userName: 'Alex',
      year: 2024,
      tagline: 'Your Year in Music'
    } as IntroSlideData,
    
    {
      type: 'stats-overview',
      title: 'Your Year by Numbers',
      stats: [
        { label: 'Minutes Listened', value: 45820, unit: 'min' }
      ]
    } as StatsOverviewSlideData,
    
    {
      type: 'summary',
      userName: 'Alex',
      year: 2024,
      message: 'Thanks for an amazing year'
    } as SummarySlideData
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

## 🎬 Keyboard Controls

When using `SlidesPresentation`:

- **→ / Right Arrow** - Next slide
- **← / Left Arrow** - Previous slide
- **Space** - Toggle auto-play
- **Click Indicators** - Jump to specific slide

## 🎨 Customization

### Custom Colors

Override CSS variables in your component:

```css
.mySlide {
  --color-primary: #your-color;
  --color-accent-purple: #your-accent;
}
```

### Custom Styles

Each component has its own CSS module that can be extended or overridden using standard CSS or CSS modules.

## 📦 Type Definitions

All types are defined in `@monorepo/common`:

```typescript
interface SlideData {
  type: 'intro' | 'stats-overview' | 'top-prompts' | 'quotes' | 'summary';
  title?: string;
  subtitle?: string;
  content?: unknown;
}

interface SlideStatItem {
  label: string;
  value: string | number;
  unit?: string;
}

interface SlideQuote {
  text: string;
  author?: string;
}

interface SlidePrompt {
  question: string;
  answer: string;
}
```

## 🔧 CSS Features

- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Variables** - Easy theming and customization
- **Backdrop Filters** - Glass morphism effects
- **Gradients** - Linear and radial gradients
- **Transitions** - Smooth state changes
- **Media Queries** - Responsive breakpoints

## 📖 Best Practices

1. **Keep Slide Data Structured** - Use typed interfaces for consistency
2. **Limit Stats Per Card** - 4-6 stats recommended for visual balance
3. **Keep Quotes Concise** - Long quotes may not display well on mobile
4. **Use Descriptive Labels** - Help users understand the metrics
5. **Test on Mobile** - Ensure proper touch targets and readability

## 🚀 Performance

- Component-based architecture for easy code splitting
- CSS modules for scoped styling and reduced bundle size
- Optimized animations using CSS transforms
- Lazy loading support through Next.js Image component

---

Built with React 18, Next.js 14, and TypeScript for a premium, maintainable experience.
