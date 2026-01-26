import { WeatherCondition, WeatherData, Location } from '../types/weather'

/**
 * Get weather icon for condition
 */
export const getWeatherIcon = (condition: WeatherCondition): string => {
  const iconMap: Record<WeatherCondition, string> = {
    sunny: '☀️',
    cloudy: '☁️',
    'partly-cloudy': '⛅',
    rainy: '🌧️',
    snowy: '❄️',
    stormy: '⛈️',
    foggy: '🌫️',
    windy: '💨',
  }
  return iconMap[condition] || '☁️'
}

/**
 * Format temperature to string
 */
export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°F`
}

/**
 * Create weather summary string
 */
export const createWeatherSummary = (
  location: { city: string; state: string },
  weather: WeatherData
): string => {
  const icon = getWeatherIcon(weather.condition)
  const temp = formatTemperature(weather.temperature)
  return `Weather: ${location.city}, ${location.state} ${icon} ${temp}`
}

/**
 * Determine if weather is severe
 */
export const isSevereWeather = (condition: WeatherCondition): boolean => {
  const severeConditions: WeatherCondition[] = ['stormy', 'snowy']
  return severeConditions.includes(condition)
}

/**
 * Check if weather data is stale
 */
export const isWeatherStale = (lastUpdated: Date, maxAge: number = 3600000): boolean => {
  const age = Date.now() - lastUpdated.getTime()
  return age > maxAge
}
