import React, { createContext, useContext, useState } from 'react'
import { WeatherData, Location } from '../types/weather'

interface WeatherContextType {
  locations: Location[]
  addLocation: (location: Location) => void
  removeLocation: (id: string) => void
  favorites: string[] // Array of location IDs
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
  recentlyViewed: Location[]
  addRecentlyViewed: (location: Location) => void
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined)

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locations, setLocations] = useState<Location[]>([
    {
      id: '1',
      name: 'San Francisco',
      city: 'San Francisco',
      state: 'CA',
      coordinates: { latitude: 37.7749, longitude: -122.4194 },
    },
    {
      id: '2',
      name: 'New York',
      city: 'New York',
      state: 'NY',
      coordinates: { latitude: 40.7128, longitude: -74.006 },
    },
    {
      id: '3',
      name: 'Chicago',
      city: 'Chicago',
      state: 'IL',
      coordinates: { latitude: 41.8781, longitude: -87.6298 },
    },
  ])

  const [favorites, setFavorites] = useState<string[]>([])
  const [recentlyViewed, setRecentlyViewed] = useState<Location[]>([])

  const addLocation = (location: Location) => {
    setLocations((prev) => {
      const exists = prev.some((l) => l.id === location.id)
      return exists ? prev : [...prev, location]
    })
  }

  const removeLocation = (id: string) => {
    setLocations((prev) => prev.filter((l) => l.id !== id))
  }

  const addFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((fav) => fav !== id))
  }

  const addRecentlyViewed = (location: Location) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((l) => l.id !== location.id)
      return [location, ...filtered].slice(0, 5)
    })
  }

  return (
    <WeatherContext.Provider
      value={{
        locations,
        addLocation,
        removeLocation,
        favorites,
        addFavorite,
        removeFavorite,
        recentlyViewed,
        addRecentlyViewed,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeatherContext = () => {
  const context = useContext(WeatherContext)
  if (!context) {
    throw new Error('useWeatherContext must be used within WeatherProvider')
  }
  return context
}
