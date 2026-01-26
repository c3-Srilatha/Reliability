import React, { useEffect } from 'react'
import { useWeatherWidget } from '../hooks/useWeatherWidget'
import { useWeatherContext } from '../context/WeatherContext'
import { createWeatherSummary, formatTemperature, getWeatherIcon } from '../utils/weather'
import WeatherIcon from './WeatherIcon'
import LocationSelector from './LocationSelector'
import './WeatherDisplay.css'

/**
 * WeatherDisplay Component
 * Main weather widget displaying current weather and location selection
 */
const WeatherDisplay: React.FC = () => {
  const { locations } = useWeatherContext()
  const { selectedLocation, weatherData, loading, error, selectLocation, refresh } =
    useWeatherWidget(true, 300000)

  const displayText =
    selectedLocation && weatherData
      ? createWeatherSummary(selectedLocation, weatherData)
      : 'Select a location to view weather'

  return (
    <div className="weather-display">
      <div className="weather-display__container">
        {/* Location Selector */}
        <LocationSelector
          selectedLocation={selectedLocation}
          facilities={locations}
          onLocationSelect={selectLocation}
          loading={loading}
        />

        {/* Weather Display Card */}
        <div className="weather-display__card">
          {loading && !weatherData && (
            <div className="weather-display__loading">
              <div className="weather-display__spinner"></div>
              <p>Fetching weather data...</p>
            </div>
          )}

          {error && (
            <div className="weather-display__error" role="alert">
              <span>⚠️</span>
              <p>{error.message}</p>
            </div>
          )}

          {weatherData && selectedLocation && (
            <div className="weather-display__content">
              <div className="weather-display__header">
                <h3 className="weather-display__title">
                  {selectedLocation.city}, {selectedLocation.state}
                </h3>
                <button
                  className="weather-display__refresh-button"
                  onClick={refresh}
                  disabled={loading}
                  title="Refresh weather data"
                  aria-label="Refresh weather"
                >
                  🔄
                </button>
              </div>

              <div className="weather-display__summary">
                <div className="weather-display__temperature-section">
                  <WeatherIcon condition={weatherData.condition} size="large" />
                  <div className="weather-display__temp-info">
                    <div className="weather-display__temperature">
                      {formatTemperature(weatherData.temperature)}
                    </div>
                    <div className="weather-display__condition">{weatherData.condition}</div>
                  </div>
                </div>

                <div className="weather-display__details">
                  {weatherData.humidity !== undefined && (
                    <div className="weather-display__detail-item">
                      <span className="weather-display__detail-label">Humidity</span>
                      <span className="weather-display__detail-value">
                        {weatherData.humidity}%
                      </span>
                    </div>
                  )}
                  {weatherData.windSpeed !== undefined && (
                    <div className="weather-display__detail-item">
                      <span className="weather-display__detail-label">Wind</span>
                      <span className="weather-display__detail-value">
                        {weatherData.windSpeed} mph
                      </span>
                    </div>
                  )}
                  {weatherData.feelsLike !== undefined && (
                    <div className="weather-display__detail-item">
                      <span className="weather-display__detail-label">Feels Like</span>
                      <span className="weather-display__detail-value">
                        {formatTemperature(weatherData.feelsLike)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="weather-display__footer">
                <p className="weather-display__text">{displayText}</p>
                <p className="weather-display__timestamp">
                  Last updated:{' '}
                  {weatherData.timestamp
                    ? new Date(weatherData.timestamp).toLocaleTimeString()
                    : 'Just now'}
                </p>
              </div>
            </div>
          )}

          {!loading && !error && !weatherData && selectedLocation && (
            <div className="weather-display__empty">
              <p>No weather data available</p>
              <button onClick={refresh} className="weather-display__retry-button">
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay
