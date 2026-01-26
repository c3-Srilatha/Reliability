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
  Stack,
  TextField,
  InputAdornment,
  IconButton,
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
  },
  {
    id: '2',
    name: 'New York',
    city: 'New York',
    state: 'NY',
  },
  {
    id: '3',
    name: 'Chicago',
    city: 'Chicago',
    state: 'IL',
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
          () => {
            // Fallback to first default facility
            fetchWeather(DEFAULT_LOCATIONS[0])
          },
          { enableHighAccuracy: true, timeout: 8000 }
        )
      } else {
        // Geolocation not supported; fallback
        fetchWeather(DEFAULT_LOCATIONS[0])
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
      await new Promise((resolve) => setTimeout(resolve, 500))

      const mockWeatherData: WeatherData = {
        temperature: Math.round(Math.random() * 40 + 50),
        condition: 'partly-cloudy',
        humidity: Math.round(Math.random() * 40 + 40),
        windSpeed: Math.round(Math.random() * 15 + 5),
        feelsLike: Math.round(Math.random() * 40 + 48),
        description: 'Partly cloudy conditions',
        lastUpdated: new Date(),
      }

      setSelectedLocation(location)
      setWeatherData(mockWeatherData)
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
  const handleSearchSubmit = () => {
    const q = searchQuery.trim()
    if (!q) return
    const isZip = /^\d{5}$/.test(q)
    const newLoc: Location = {
      id: `custom-${q}`,
      name: isZip ? `ZIP ${q}` : q,
      city: isZip ? `ZIP ${q}` : q,
      state: '',
    }
    handleSelectLocation(newLoc)
    setSearchQuery('')
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
