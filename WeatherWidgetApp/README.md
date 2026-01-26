# Weather Widget App

A standalone, production-ready weather widget application built with React and TypeScript.

## Features

- **Location Selection**: Choose from preset facilities or enter custom locations
- **Real-time Weather Display**: Shows temperature, conditions, humidity, wind speed, and more
- **Auto-Refresh**: Automatically updates weather data at configurable intervals
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Graceful error messages and retry functionality
- **Weather Context**: Global state management for locations and preferences
- **Type Safety**: Full TypeScript support with strict mode enabled

## Project Structure

```
src/
├── components/          # React UI components
│   ├── WeatherDisplay.tsx
│   ├── LocationSelector.tsx
│   ├── WeatherIcon.tsx
│   └── *.css           # Component styles
├── hooks/              # Custom React hooks
│   └── useWeatherWidget.ts
├── context/            # React Context providers
│   └── WeatherContext.tsx
├── utils/              # Utility functions
│   └── weather.ts
├── types/              # TypeScript type definitions
│   └── weather.ts
├── App.tsx             # Main application component
└── index.tsx           # Entry point
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
cd WeatherWidgetApp
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:3000`

### Build

```bash
npm run build
```

Produces optimized build in `dist/` directory

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run tests (when configured)

## Architecture

### Components

**WeatherDisplay**
- Main widget component
- Manages weather state and location selection
- Displays temperature, conditions, and details

**LocationSelector**
- Tab-based interface for location selection
- Supports facilities list and custom location input
- Shows currently selected location

**WeatherIcon**
- Renders weather condition emoji icon
- Supports three size variants

### Hooks

**useWeatherWidget**
- Manages weather data state
- Handles location selection
- Implements auto-refresh functionality
- Returns: selectedLocation, weatherData, loading, error, selectLocation, refresh

**useGeolocation**
- Detects user's current location
- Returns: location, loading, error

**useWeatherCache**
- Provides caching utilities for weather data
- Methods: getFromCache, saveToCache, clearCache

### Context

**WeatherContext**
- Global state for locations, favorites, and recently viewed
- Provides: locations, favorites, recentlyViewed
- Methods: addLocation, removeLocation, addFavorite, removeFavorite, addRecentlyViewed

## Styling

Uses CSS modules with BEM naming convention:
- Scoped styling prevents conflicts
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Gradient backgrounds and modern UI

## Type Safety

Full TypeScript support with strict mode:

```typescript
interface WeatherDisplayProps {
  facilities?: Facility[]
  onWeatherUpdate?: (weather: WeatherData) => void
  autoRefresh?: boolean
  refreshInterval?: number
  className?: string
}
```

## Configuration

Weather widget settings in `src/utils/weather.ts`:

```typescript
// Auto-refresh interval (ms)
refreshInterval: 300000 // 5 minutes

// Weather cache max age (ms)
maxAge: 3600000 // 1 hour

// Severe weather conditions
severeConditions: ['stormy', 'snowy']
```

## Integration

To integrate into another application:

```typescript
import WeatherDisplay from '@/components/WeatherDisplay'
import { WeatherProvider } from '@/context/WeatherContext'

<WeatherProvider>
  <WeatherDisplay />
</WeatherProvider>
```

## Data Flow

1. User selects location via LocationSelector
2. useWeatherWidget fetches weather data
3. WeatherDisplay renders weather information
4. Auto-refresh updates data at configured interval
5. Changes propagate through context and props

## API Integration

Currently uses mock data. To integrate real weather API:

1. Update `useWeatherWidget` hook in `src/hooks/useWeatherWidget.ts`
2. Replace the `fetchWeather` function with actual API call
3. Update type definitions in `src/types/weather.ts` if needed

Example:
```typescript
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${location.city}&units=imperial&appid=${API_KEY}`
)
const data = await response.json()
// Transform API response to WeatherData format
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android Latest

## Performance

- Component memoization for optimized re-renders
- Efficient state management with Context API
- CSS transitions with GPU acceleration
- Lazy loading ready for code splitting

## Accessibility

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast meets WCAG standards

## License

MIT

## Author

Built with ❤️ for weather information at a glance.
