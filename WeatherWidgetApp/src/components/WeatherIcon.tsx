import React from 'react'
import { WeatherIconProps } from '../types/weather'
import { getWeatherIcon } from '../utils/weather'
import './WeatherIcon.css'

/**
 * WeatherIcon Component
 * Displays emoji icon for weather condition
 */
const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, size = 'medium', className = '' }) => {
  const icon = getWeatherIcon(condition)
  const sizeClass = `weather-icon--${size}`

  return (
    <div className={`weather-icon ${sizeClass} ${className}`} role="img" aria-label={condition}>
      {icon}
    </div>
  )
}

export default WeatherIcon
