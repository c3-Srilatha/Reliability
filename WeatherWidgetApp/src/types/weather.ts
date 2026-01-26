/**
 * Weather Widget Type Definitions
 */

export type WeatherCondition =
  | 'sunny'
  | 'cloudy'
  | 'partly-cloudy'
  | 'rainy'
  | 'snowy'
  | 'stormy'
  | 'foggy'
  | 'windy'

export interface WeatherData {
  temperature: number // Fahrenheit
  condition: WeatherCondition
  humidity?: number
  windSpeed?: number
  feelsLike?: number
  description?: string
  lastUpdated: Date
  timestamp?: number
}

export interface Location {
  id: string
  name: string
  city: string
  state: string
  coordinates?: {
    latitude: number
    longitude: number
  }
}

export interface Facility {
  id: string
  name: string
  city: string
  state: string
  zipCode?: string
  latitude?: number
  longitude?: number
  address?: string
  type?: string
}

export interface GeoLocation {
  latitude: number
  longitude: number
  accuracy: number
}

export interface WeatherAPIResponse {
  coord?: {
    lon: number
    lat: number
  }
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust?: number
  }
  clouds: {
    all: number
  }
  dt: number
  timezone: number
  id: number
  name: string
  cod: number
}

export interface WeatherWidgetState {
  selectedLocation: Location | null
  weatherData: WeatherData | null
  loading: boolean
  error: Error | null
  lastUpdated: Date | null
}

export interface WeatherDisplayProps {
  facilities?: Facility[]
  onWeatherUpdate?: (weather: WeatherData) => void
  autoRefresh?: boolean
  refreshInterval?: number
  className?: string
}

export interface LocationSelectorProps {
  selectedLocation: Location | null
  facilities: Facility[]
  onLocationSelect: (location: Location) => void
  loading?: boolean
}

export interface WeatherIconProps {
  condition: WeatherCondition
  size?: 'small' | 'medium' | 'large'
  className?: string
}
