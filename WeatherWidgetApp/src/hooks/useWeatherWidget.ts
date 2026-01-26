import { useState, useCallback, useEffect } from 'react'
import {
  WeatherData,
  Location,
  WeatherWidgetState,
  WeatherCondition,
  Facility,
} from '../types/weather'

/**
 * Hook for managing weather widget state
 */
export const useWeatherWidget = (autoRefresh = true, refreshInterval = 300000) => {
  const [state, setState] = useState<WeatherWidgetState>({
    selectedLocation: null,
    weatherData: null,
    loading: false,
    error: null,
    lastUpdated: null,
  })

  // Fetch weather data from API
  const fetchWeather = useCallback(async (location: Location) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    try {
      // Simulate API call - replace with actual API integration
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Mock weather data
      const mockWeatherData: WeatherData = {
        temperature: Math.round(Math.random() * 40 + 50),
        condition: 'partly-cloudy',
        humidity: Math.round(Math.random() * 40 + 40),
        windSpeed: Math.round(Math.random() * 15 + 5),
        feelsLike: Math.round(Math.random() * 40 + 48),
        description: 'Partly cloudy conditions',
        lastUpdated: new Date(),
      }

      setState((prev) => ({
        ...prev,
        selectedLocation: location,
        weatherData: mockWeatherData,
        loading: false,
        lastUpdated: new Date(),
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error : new Error('Failed to fetch weather'),
        loading: false,
      }))
    }
  }, [])

  // Auto-refresh weather data
  useEffect(() => {
    if (!autoRefresh || !state.selectedLocation) return

    const interval = setInterval(() => {
      fetchWeather(state.selectedLocation!)
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval, state.selectedLocation, fetchWeather])

  const selectLocation = useCallback(
    (location: Location) => {
      fetchWeather(location)
    },
    [fetchWeather]
  )

  const refresh = useCallback(() => {
    if (state.selectedLocation) {
      fetchWeather(state.selectedLocation)
    }
  }, [state.selectedLocation, fetchWeather])

  return {
    ...state,
    selectLocation,
    refresh,
  }
}

/**
 * Hook for geolocation (current location detection)
 */
export const useGeolocation = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(new Error('Geolocation not supported'))
      return
    }

    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        setLoading(false)
      },
      (err) => {
        setError(err)
        setLoading(false)
      }
    )
  }, [])

  return { location, loading, error }
}

/**
 * Hook for weather caching
 */
export const useWeatherCache = () => {
  const getFromCache = useCallback((key: string) => {
    const cached = localStorage.getItem(`weather_${key}`)
    return cached ? JSON.parse(cached) : null
  }, [])

  const saveToCache = useCallback((key: string, data: WeatherData) => {
    localStorage.setItem(`weather_${key}`, JSON.stringify(data))
  }, [])

  const clearCache = useCallback((key?: string) => {
    if (key) {
      localStorage.removeItem(`weather_${key}`)
    } else {
      // Clear all weather cache
      Object.keys(localStorage).forEach((k) => {
        if (k.startsWith('weather_')) {
          localStorage.removeItem(k)
        }
      })
    }
  }, [])

  return { getFromCache, saveToCache, clearCache }
}
