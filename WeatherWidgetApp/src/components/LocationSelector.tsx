import React, { useState } from 'react'
import { Location, LocationSelectorProps, Facility } from '../types/weather'
import './LocationSelector.css'

/**
 * LocationSelector Component
 * Allows user to select location from facilities, custom input, or auto-detect
 */
const LocationSelector: React.FC<LocationSelectorProps> = ({
  selectedLocation,
  facilities,
  onLocationSelect,
  loading = false,
}) => {
  const [mode, setMode] = useState<'facilities' | 'custom'>('facilities')
  const [customCity, setCustomCity] = useState('')
  const [customState, setCustomState] = useState('')

  const handleSelectFacility = (facility: Facility) => {
    const location: Location = {
      id: facility.id,
      name: facility.name,
      city: facility.city,
      state: facility.state,
      coordinates: facility.latitude && facility.longitude
        ? { latitude: facility.latitude, longitude: facility.longitude }
        : undefined,
    }
    onLocationSelect(location)
  }

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (customCity.trim() && customState.trim()) {
      const location: Location = {
        id: `custom-${Date.now()}`,
        name: `${customCity}, ${customState}`,
        city: customCity,
        state: customState,
      }
      onLocationSelect(location)
      setCustomCity('')
      setCustomState('')
    }
  }

  return (
    <div className="location-selector">
      <div className="location-selector__tabs">
        <button
          className={`location-selector__tab ${mode === 'facilities' ? 'location-selector__tab--active' : ''}`}
          onClick={() => setMode('facilities')}
          disabled={loading}
        >
          📍 Facilities
        </button>
        <button
          className={`location-selector__tab ${mode === 'custom' ? 'location-selector__tab--active' : ''}`}
          onClick={() => setMode('custom')}
          disabled={loading}
        >
          🔍 Custom Location
        </button>
      </div>

      <div className="location-selector__content">
        {mode === 'facilities' && (
          <div className="location-selector__list">
            {facilities.length === 0 ? (
              <p className="location-selector__empty">No facilities available</p>
            ) : (
              facilities.map((facility) => (
                <button
                  key={facility.id}
                  className={`location-selector__item ${
                    selectedLocation?.id === facility.id ? 'location-selector__item--selected' : ''
                  }`}
                  onClick={() => handleSelectFacility(facility)}
                  disabled={loading}
                >
                  <span className="location-selector__item-name">{facility.name}</span>
                  <span className="location-selector__item-location">
                    {facility.city}, {facility.state}
                  </span>
                </button>
              ))
            )}
          </div>
        )}

        {mode === 'custom' && (
          <form className="location-selector__form" onSubmit={handleCustomSubmit}>
            <input
              type="text"
              className="location-selector__input"
              placeholder="City"
              value={customCity}
              onChange={(e) => setCustomCity(e.target.value)}
              disabled={loading}
            />
            <input
              type="text"
              className="location-selector__input"
              placeholder="State (e.g., CA)"
              value={customState}
              onChange={(e) => setCustomState(e.target.value.toUpperCase())}
              disabled={loading}
              maxLength={2}
            />
            <button
              type="submit"
              className="location-selector__submit"
              disabled={loading || !customCity.trim() || !customState.trim()}
            >
              {loading ? 'Loading...' : 'Get Weather'}
            </button>
          </form>
        )}
      </div>

      {selectedLocation && (
        <div className="location-selector__selected">
          <span>Selected: {selectedLocation.city}, {selectedLocation.state}</span>
        </div>
      )}
    </div>
  )
}

export default LocationSelector
