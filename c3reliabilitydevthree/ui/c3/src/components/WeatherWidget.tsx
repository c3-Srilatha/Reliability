import React, { useState, useEffect } from 'react';

import {
  MenuItem,
  FormControl,
  Box,
  Button,
  Divider,
  Switch,
  Select,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Paper,
  InputLabel,
  Grid,
  Chip,
  TextField,
  Menu,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ListItemIcon,
} from '@mui/material';
// Using emoji icons to avoid external icon dependency

/**
 * Weather condition types
 */
type WeatherCondition = 'sunny' | 'cloudy' | 'partly-cloudy' | 'rainy' | 'snowy' | 'stormy' | 'foggy' | 'windy'

/**
 * Weather data interface
 */
interface WeatherData {
  temperature: number
  condition: WeatherCondition
  humidity?: number
  windSpeed?: number
  feelsLike?: number
  description?: string
  lastUpdated: Date
}

/**
 * Location interface
 */
interface Location {
  id: string
  name: string
  city: string
  state: string
  lat?: number
  lng?: number
}

/**
 * Cached weather data with expiration
 */
interface CachedWeather {
  data: WeatherData
  location: Location
  timestamp: number
  ttl: number
}

/**
 * Get weather icon for condition
 */
const getWeatherIcon = (condition: WeatherCondition): string => {
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
const formatTemperature = (tempF: number, useFahrenheit: boolean): string => {
  const val = useFahrenheit ? tempF : (tempF - 32) * (5 / 9)
  const unit = useFahrenheit ? '°F' : '°C'
  return `${Math.round(val)}${unit}`
}

/**
 * Mock locations data
 */
const DEFAULT_LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'San Francisco',
    city: 'San Francisco',
    state: 'CA',
    lat: 37.7749,
    lng: -122.4194,
  },
  {
    id: '2',
    name: 'New York',
    city: 'New York',
    state: 'NY',
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: '3',
    name: 'Chicago',
    city: 'Chicago',
    state: 'IL',
    lat: 41.8781,
    lng: -87.6298,
  },
]

interface WeatherWidgetProps {
  compact?: boolean
  refreshIntervalMinutes?: number
  admin?: boolean
}

/**
 * WeatherWidget Component
 * Full-featured weather widget for displaying real-time weather information
 * Can be rendered in compact mode for header display
 */
const WeatherWidget: React.FC<WeatherWidgetProps> = ({ compact = true, refreshIntervalMinutes = 60, admin = false }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showFahrenheit, setShowFahrenheit] = useState(true)
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [customDialogOpen, setCustomDialogOpen] = useState(false)
  const [refreshMinutes, setRefreshMinutes] = useState<number>(() => {
    const fromStorage = typeof window !== 'undefined' ? window.localStorage.getItem('weather.refreshMinutes') : null
    return fromStorage ? Number(fromStorage) || refreshIntervalMinutes : refreshIntervalMinutes
  })

  // Anchored dropdown state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const closeMenu = () => setAnchorEl(null)

  const buildCacheKey = (location: Location): string => {
    if (location.lat != null && location.lng != null) {
      const lat = Math.round(location.lat * 100) / 100
      const lng = Math.round(location.lng * 100) / 100
      return `weather_cache_v2_${location.id}_${lat}_${lng}`
    }
    return `weather_cache_v2_${location.id}`
  }

  /**
   * Get cached weather data if valid
   */
  const getCachedWeather = (location: Location): WeatherData | null => {
    try {
      const cached = localStorage.getItem(buildCacheKey(location))
      if (!cached) return null
      
      const data: CachedWeather = JSON.parse(cached)
      const now = Date.now()
      
      // Check if cache is still valid
      if (now - data.timestamp < data.ttl) {
        return { ...data.data, lastUpdated: new Date(data.data.lastUpdated) }
      }
      
      // Clean up expired cache
      localStorage.removeItem(buildCacheKey(location))
      return null
    } catch {
      return null
    }
  }

  /**
   * Cache weather data
   */
  const cacheWeather = (location: Location, weather: WeatherData) => {
    try {
      const cached: CachedWeather = {
        data: weather,
        location,
        timestamp: Date.now(),
        ttl: refreshMinutes * 60 * 1000, // Match refresh interval
      }
      localStorage.setItem(buildCacheKey(location), JSON.stringify(cached))
    } catch {
      // Silently fail if localStorage is full
    }
  }

  /**
   * Detect location via IP geolocation API
   */
  const detectLocationByIP = async (): Promise<Location | null> => {
    try {
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      
      if (data.city && data.latitude && data.longitude) {
        return {
          id: 'ip-location',
          name: 'Your Location',
          city: data.city,
          state: data.region_code || data.region || '',
          lat: Number(data.latitude),
          lng: Number(data.longitude),
        }
      }
      return null
    } catch {
      return null
    }
  }

  /**
   * Geocode city/zip to coordinates
   */
  const geocodeLocation = async (query: string): Promise<Location | null> => {
    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`
      const response = await fetch(url)
      const data = await response.json()
      const result = data?.results?.[0]
      if (!result) return null
      return {
        id: `geo-${result.latitude}-${result.longitude}`,
        name: result.name,
        city: result.name,
        state: result.admin1 || result.country_code || '',
        lat: result.latitude,
        lng: result.longitude,
      }
    } catch {
      return null
    }
  }

  /**
   * Initialize with default location on mount
   */
  useEffect(() => {
    // Attempt geolocation to auto-detect default location
    const detect = async () => {
      
      if (typeof navigator !== 'undefined' && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords
            const loc: Location = {
              id: 'current',
              name: 'Your Location',
              city: 'Your Location',
              state: '',
              lat: latitude,
              lng: longitude,
            }
            setCurrentLocation(loc)
            fetchWeather(loc)
          },
          async () => {
            // Fallback to IP geolocation
            const ipLoc = await detectLocationByIP()
            if (ipLoc) {
              setCurrentLocation(ipLoc)
              fetchWeather(ipLoc)
            } else {
              // Final fallback to first default facility
              fetchWeather(DEFAULT_LOCATIONS[0])
            }
          },
          { enableHighAccuracy: true, timeout: 8000 }
        )
      } else {
        // Browser geolocation not supported, try IP
        const ipLoc = await detectLocationByIP()
        if (ipLoc) {
          setCurrentLocation(ipLoc)
          fetchWeather(ipLoc)
        } else {
          // Final fallback
          fetchWeather(DEFAULT_LOCATIONS[0])
        }
      }
    }
    detect()
  }, [])

  // Auto-refresh timer
  useEffect(() => {
    if (!selectedLocation) return
    const ms = Math.max(1, refreshMinutes) * 60 * 1000
    const id = setInterval(() => {
      fetchWeather(selectedLocation)
    }, ms)
    return () => clearInterval(id)
  }, [selectedLocation, refreshMinutes])

  /**
   * Fetch weather data for a location
   */
  const fetchWeather = async (location: Location) => {
    setLoading(true)
    setError(null)
    try {
      if (location.lat == null || location.lng == null) {
        const geo = await geocodeLocation(`${location.city}${location.state ? `, ${location.state}` : ''}`)
        if (!geo) {
          setError('Unable to determine location coordinates')
          return
        }
        location = geo
      }
      // Check cache first
      const cached = getCachedWeather(location)
      if (cached) {
        setSelectedLocation(location)
        setWeatherData(cached)
        setLoading(false)
        closeMenu()
        return
      }

      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph`
      const response = await fetch(weatherUrl)
      const data = await response.json()
      const current = data?.current
      if (!current) {
        throw new Error('No weather data')
      }

      const conditionMap: Record<number, { condition: WeatherCondition; description: string }> = {
        0: { condition: 'sunny', description: 'Clear sky' },
        1: { condition: 'partly-cloudy', description: 'Mainly clear' },
        2: { condition: 'partly-cloudy', description: 'Partly cloudy' },
        3: { condition: 'cloudy', description: 'Overcast' },
        45: { condition: 'foggy', description: 'Fog' },
        48: { condition: 'foggy', description: 'Depositing rime fog' },
        71: { condition: 'snowy', description: 'Slight snow' },
        73: { condition: 'snowy', description: 'Moderate snow' },
        75: { condition: 'snowy', description: 'Heavy snow' },
        77: { condition: 'snowy', description: 'Snow grains' },
        85: { condition: 'snowy', description: 'Slight snow showers' },
        86: { condition: 'snowy', description: 'Heavy snow showers' },
        95: { condition: 'stormy', description: 'Thunderstorm' },
        96: { condition: 'stormy', description: 'Thunderstorm with hail' },
        99: { condition: 'stormy', description: 'Thunderstorm with heavy hail' },
        51: { condition: 'rainy', description: 'Light drizzle' },
        53: { condition: 'rainy', description: 'Moderate drizzle' },
        55: { condition: 'rainy', description: 'Dense drizzle' },
        56: { condition: 'rainy', description: 'Light freezing drizzle' },
        57: { condition: 'rainy', description: 'Dense freezing drizzle' },
        61: { condition: 'rainy', description: 'Slight rain' },
        63: { condition: 'rainy', description: 'Moderate rain' },
        65: { condition: 'rainy', description: 'Heavy rain' },
        66: { condition: 'rainy', description: 'Light freezing rain' },
        67: { condition: 'rainy', description: 'Heavy freezing rain' },
        80: { condition: 'rainy', description: 'Slight rain showers' },
        81: { condition: 'rainy', description: 'Moderate rain showers' },
        82: { condition: 'rainy', description: 'Violent rain showers' },
      }

      const code = Number(current.weather_code)
      const mapped = conditionMap[code] || { condition: 'cloudy', description: 'Cloudy' }
      const isWindy = Number(current.wind_speed_10m) >= 20
      const resolved = isWindy ? { condition: 'windy' as WeatherCondition, description: 'Windy' } : mapped

      const liveWeatherData: WeatherData = {
        temperature: Math.round(current.temperature_2m),
        condition: resolved.condition,
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        feelsLike: Math.round(current.apparent_temperature),
        description: resolved.description,
        lastUpdated: current.time ? new Date(current.time) : new Date(),
      }

      // Cache the new data
      cacheWeather(location, liveWeatherData)

      setSelectedLocation(location)
      setWeatherData(liveWeatherData)
      // Close dropdown if open
      closeMenu()
    } catch (err) {
      setError('Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }

  /**
   * Handle location selection
   */
  const handleSelectLocation = (location: Location) => {
    fetchWeather(location)
  }

  /**
   * Handle refresh
   */
  const handleRefresh = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedLocation) {
      fetchWeather(selectedLocation)
    }
  }

  // Create a location from search input (city or zip)
  const handleSearchSubmit = async () => {
    const q = searchQuery.trim()
    if (!q) return
    setLoading(true)
    setError(null)
    try {
      const geo = await geocodeLocation(q)
      if (geo) {
        handleSelectLocation(geo)
      } else {
        setError('Location not found')
      }
    } finally {
      setLoading(false)
      setSearchQuery('')
    }
  }

  // Compact header view
  if (compact) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            onClick={openMenu}
            disabled={loading}
            sx={{
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
            aria-label="Open location weather dropdown"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setAnchorEl(e.currentTarget as unknown as HTMLElement)
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Weather:</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {selectedLocation?.id === 'current' ? 'Your Location' : (selectedLocation?.name || 'Select')}
              </Typography>
              <span aria-hidden>▾</span>
              {loading ? (
                <CircularProgress size={18} />
              ) : weatherData ? (
                <>
                  <span style={{ fontSize: '1.1rem' }}>{getWeatherIcon(weatherData.condition)}</span>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {formatTemperature(weatherData.temperature, showFahrenheit)}
                  </Typography>
                </>
              ) : (
                <span aria-hidden>☁️</span>
              )}
            </Box>
          </Button>

          {/* Refresh Button */}
          {weatherData && (
            <Button
              size="small"
              onClick={handleRefresh}
              disabled={loading}
              sx={{ minWidth: 'auto', p: 0.5 }}
              aria-label="Refresh weather"
            >
              <span aria-hidden>🔄</span>
            </Button>
          )}

          {/* Location Dropdown Menu anchored to button */}
          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={closeMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            MenuListProps={{ 'aria-label': 'Select location' }}
          >
            {currentLocation && (
              <MenuItem
                onClick={() => { handleSelectLocation(currentLocation); closeMenu(); }}
                disabled={loading}
                selected={selectedLocation?.id === currentLocation.id}
              >
                {selectedLocation?.id === currentLocation.id && (
                  <ListItemIcon sx={{ minWidth: 28 }}><span aria-hidden>✓</span></ListItemIcon>
                )}
                <Typography variant="body2" sx={{ fontWeight: selectedLocation?.id === currentLocation.id ? 600 : 400 }}>
                  Your Location (Auto)
                </Typography>
              </MenuItem>
            )}
            <Divider />
            <Box sx={{ px: 2, py: 1 }}>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                CURRENTLY VIEWING ({DEFAULT_LOCATIONS.length})
              </Typography>
            </Box>
            {DEFAULT_LOCATIONS.map((location) => (
              <MenuItem
                key={location.id}
                onClick={() => { handleSelectLocation(location); closeMenu(); }}
                disabled={loading}
                selected={selectedLocation?.id === location.id}
              >
                {selectedLocation?.id === location.id && (
                  <ListItemIcon sx={{ minWidth: 28 }}><span aria-hidden>✓</span></ListItemIcon>
                )}
                <Box>
                  <Typography variant="body2">{location.city}, {location.state}</Typography>
                </Box>
              </MenuItem>
            ))}
            <Divider />
            <MenuItem onClick={() => { closeMenu(); setCustomDialogOpen(true) }}>
              <Typography variant="body2" sx={{ color: 'primary.main' }}>Custom Location...</Typography>
            </MenuItem>
          </Menu>

          {/* Custom Location Dialog */}
          <Dialog open={customDialogOpen} onClose={() => setCustomDialogOpen(false)}>
            <DialogTitle>Custom Location</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="City or ZIP"
                fullWidth
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchSubmit()
                    setCustomDialogOpen(false)
                  }
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setCustomDialogOpen(false)}>Cancel</Button>
              <Button onClick={() => { handleSearchSubmit(); setCustomDialogOpen(false) }} variant="contained">Add</Button>
            </DialogActions>
          </Dialog>
      </Box>
    )
  }

  // Full view
  return (
    <Box sx={{ p: 3, maxWidth: 600 }}>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span aria-hidden style={{ fontSize: 24 }}>☁️</span>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Weather
              </Typography>
            </Box>
            {weatherData && (
              <Button
                size="small"
                onClick={handleRefresh}
                disabled={loading}
                aria-label="Refresh weather"
              >
                Refresh
              </Button>
            )}
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Location Selector */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Select Location</InputLabel>
            <Select
              value={selectedLocation?.id || ''}
              label="Select Location"
              onChange={(e) => {
                const val = (e.target as HTMLInputElement).value as string
                const location = DEFAULT_LOCATIONS.find((loc) => loc.id === val)
                if (location) {
                  handleSelectLocation(location)
                }
              }}
              disabled={loading}
            >
              {DEFAULT_LOCATIONS.map((location) => (
                <MenuItem key={location.id} value={location.id}>
                  {location.name} - {location.city}, {location.state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Admin: Refresh Interval Setting */}
          {admin && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Refresh Interval (minutes)
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={String(refreshMinutes)}
                  onChange={(e) => {
                    const val = Number((e.target as HTMLInputElement).value)
                    setRefreshMinutes(val)
                    if (typeof window !== 'undefined') {
                      window.localStorage.setItem('weather.refreshMinutes', String(val))
                    }
                  }}
                >
                  {[15, 30, 60, 120].map((m) => (
                    <MenuItem key={m} value={String(m)}>
                      {m} minutes
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}

          {/* Temperature Unit Toggle */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 3,
              p: 1.5,
              backgroundColor: '#f5f5f5',
              borderRadius: 1,
            }}
          >
            <Typography variant="body2">Temperature Unit</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="caption">°C</Typography>
              <Switch
                checked={showFahrenheit}
                onChange={(e) => setShowFahrenheit(e.target.checked)}
              />
              <Typography variant="caption">°F</Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Loading State */}
          {loading && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
              <CircularProgress sx={{ mb: 2 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Fetching weather...
              </Typography>
            </Box>
          )}

          {/* Error State */}
          {error && !loading && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Weather Display */}
          {weatherData && selectedLocation && !loading && (
            <Box>
              {/* Location Header */}
              <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedLocation.city}, {selectedLocation.state}
              </Typography>

              {/* Main Weather Info */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 3,
                  p: 2,
                  backgroundColor: '#f9f9f9',
                  borderRadius: 1,
                }}
              >
                <Box sx={{ fontSize: '3rem' }}>{getWeatherIcon(weatherData.condition)}</Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {formatTemperature(weatherData.temperature, showFahrenheit)}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                    {weatherData.condition}
                  </Typography>
                </Box>
              </Box>

              {/* Weather Details Grid */}
              <Grid container spacing={2} sx={{ mb: 2 }}>
                {weatherData.humidity !== undefined && (
                  <Grid item xs={6} sm={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Humidity
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {weatherData.humidity}%
                      </Typography>
                    </Paper>
                  </Grid>
                )}
                {weatherData.windSpeed !== undefined && (
                  <Grid item xs={6} sm={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Wind
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {weatherData.windSpeed} mph
                      </Typography>
                    </Paper>
                  </Grid>
                )}
                {weatherData.feelsLike !== undefined && (
                  <Grid item xs={6} sm={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Feels Like
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {formatTemperature(weatherData.feelsLike as number, showFahrenheit)}
                      </Typography>
                    </Paper>
                  </Grid>
                )}
              </Grid>

              {/* Description */}
              {weatherData.description && (
                <Chip
                  label={weatherData.description}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              )}

              {/* Last Updated */}
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 2 }}>
                Updated: {weatherData.lastUpdated.toLocaleTimeString()}
              </Typography>
            </Box>
          )}

          {/* Empty State */}
          {!weatherData && !loading && !error && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <span aria-hidden style={{ fontSize: 44 }}>☁️</span>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Select a location to view weather
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default WeatherWidget
