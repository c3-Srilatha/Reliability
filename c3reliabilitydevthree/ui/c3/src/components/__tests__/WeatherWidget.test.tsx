// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WeatherWidget from '../WeatherWidget';

// Minimal Jest global declarations for this workspace
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const jest: any;

const mockWeatherResponse = (overrides?: Partial<any>) => ({
  json: async () => ({
    current: {
      temperature_2m: 70,
      apparent_temperature: 68,
      relative_humidity_2m: 55,
      wind_speed_10m: 12,
      weather_code: 2,
      time: '2026-01-28T12:00:00Z',
      ...overrides,
    },
  }),
});

const mockIpResponse = () => ({
  json: async () => ({
    city: 'Austin',
    region: 'TX',
    region_code: 'TX',
    latitude: 30.2672,
    longitude: -97.7431,
  }),
});

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).fetch = jest.fn(async (url: string) => {
    if (url.startsWith('https://ipapi.co/')) {
      return mockIpResponse();
    }
    if (url.startsWith('https://api.open-meteo.com/')) {
      return mockWeatherResponse();
    }
    if (url.startsWith('https://geocoding-api.open-meteo.com/')) {
      return {
        json: async () => ({
          results: [{
            name: 'Dallas',
            admin1: 'TX',
            latitude: 32.7767,
            longitude: -96.797,
          }],
        }),
      };
    }
    return mockWeatherResponse();
  });

  Object.defineProperty(global.navigator, 'geolocation', {
    value: {
      getCurrentPosition: jest.fn(),
    },
    configurable: true,
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

it('loads weather from browser geolocation', async () => {
  const geo = global.navigator.geolocation as Geolocation;
  (geo.getCurrentPosition as any).mockImplementation((success: PositionCallback) => {
    success({
      coords: {
        latitude: 37.5,
        longitude: -122.3,
        accuracy: 1,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      } as GeolocationCoordinates,
      timestamp: Date.now(),
    } as GeolocationPosition);
  });

  render(<WeatherWidget compact={false} />);

  expect(await screen.findByText(/70°F/)).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith(
    expect.stringContaining('latitude=37.5'),
  );
});

it('falls back to IP geolocation when browser geolocation fails', async () => {
  const geo = global.navigator.geolocation as Geolocation;
  (geo.getCurrentPosition as any).mockImplementation(
    (_success: PositionCallback, error?: PositionErrorCallback) => {
      if (error) {
        error({ code: 1, message: 'Denied', PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 } as GeolocationPositionError);
      }
    }
  );

  render(<WeatherWidget compact={false} />);

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('https://ipapi.co/json/'));
  });
  expect(await screen.findByText(/70°F/)).toBeInTheDocument();
});

it('uses default location coordinates when selecting from dropdown', async () => {
  const geo = global.navigator.geolocation as Geolocation;
  (geo.getCurrentPosition as any).mockImplementation(
    (_success: PositionCallback, error?: PositionErrorCallback) => {
      if (error) {
        error({ code: 1, message: 'Denied', PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 } as GeolocationPositionError);
      }
    }
  );

  render(<WeatherWidget compact />);

  const dropdown = await screen.findByLabelText('Open location weather dropdown');
  fireEvent.click(dropdown);

  const sfOption = await screen.findByText('San Francisco, CA');
  fireEvent.click(sfOption);

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('latitude=37.7749&longitude=-122.4194')
    );
  });
});
