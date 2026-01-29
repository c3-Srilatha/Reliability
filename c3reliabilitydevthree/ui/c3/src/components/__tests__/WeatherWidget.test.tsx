// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
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
  localStorage.clear();
  jest.useRealTimers();
});

const mockGeoSuccess = (lat = 37.5, lng = -122.3) => {
  const geo = global.navigator.geolocation as Geolocation;
  (geo.getCurrentPosition as any).mockImplementation((success: PositionCallback) => {
    success({
      coords: {
        latitude: lat,
        longitude: lng,
        accuracy: 1,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      } as GeolocationCoordinates,
      timestamp: Date.now(),
    } as GeolocationPosition);
  });
};

const mockGeoFailure = () => {
  const geo = global.navigator.geolocation as Geolocation;
  (geo.getCurrentPosition as any).mockImplementation(
    (_success: PositionCallback, error?: PositionErrorCallback) => {
      if (error) {
        error({ code: 1, message: 'Denied', PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 } as GeolocationPositionError);
      }
    }
  );
};

it('loads weather from browser geolocation', async () => {
  mockGeoSuccess(37.5, -122.3);

  render(<WeatherWidget compact={false} />);

  expect(await screen.findByText(/70°F/)).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith(
    expect.stringContaining('latitude=37.5'),
  );
});

it('falls back to IP geolocation when browser geolocation fails', async () => {
  mockGeoFailure();

  render(<WeatherWidget compact={false} />);

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('https://ipapi.co/json/'));
  });
  expect(await screen.findByText(/70°F/)).toBeInTheDocument();
});

it('uses default location coordinates when selecting from dropdown', async () => {
  mockGeoFailure();

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

it('refreshes weather every 60 minutes', async () => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2026-01-28T00:00:00Z'));
  mockGeoSuccess(37.5, -122.3);

  render(<WeatherWidget compact={false} refreshIntervalMinutes={60} />);

  await screen.findByText(/70°F/);

  act(() => {
    jest.advanceTimersByTime(60 * 60 * 1000 + 1);
  });

  await waitFor(() => {
    const calls = (global.fetch as any).mock.calls
      .map((c: any[]) => c[0])
      .filter((u: string) => u.includes('api.open-meteo.com'));
    expect(calls.length).toBeGreaterThanOrEqual(2);
  });
});

it('supports custom location search by city/zip', async () => {
  mockGeoFailure();

  render(<WeatherWidget compact />);

  fireEvent.click(await screen.findByLabelText('Open location weather dropdown'));
  fireEvent.click(await screen.findByText('Custom Location...'));

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Dallas' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('geocoding-api.open-meteo.com')
    );
  });
});

it('shows loading state while fetching weather', async () => {
  mockGeoSuccess(37.5, -122.3);
  (global as any).fetch = jest.fn(() => new Promise(() => {}));

  render(<WeatherWidget compact={false} />);

  expect(await screen.findByText('Fetching weather...')).toBeInTheDocument();
});

it('shows error state when weather fetch fails', async () => {
  mockGeoSuccess(37.5, -122.3);
  (global as any).fetch = jest.fn((url: string) => {
    if (url.startsWith('https://api.open-meteo.com/')) {
      return Promise.reject(new Error('Failed'));
    }
    return mockWeatherResponse();
  });

  render(<WeatherWidget compact={false} />);

  expect(await screen.findByText('Failed to fetch weather data')).toBeInTheDocument();
});

it('toggles temperature units from °F to °C', async () => {
  mockGeoSuccess(37.5, -122.3);

  render(<WeatherWidget compact={false} />);

  expect(await screen.findByText(/70°F/)).toBeInTheDocument();

  const toggleInput = screen.getByRole('checkbox');
  fireEvent.click(toggleInput);

  expect(await screen.findByText(/21°C/)).toBeInTheDocument();
});

it('uses cached weather data when available', async () => {
  const lat = 37.5;
  const lng = -122.3;
  mockGeoSuccess(lat, lng);

  const cached = {
    data: {
      temperature: 80,
      condition: 'sunny',
      lastUpdated: new Date().toISOString(),
    },
    location: { id: 'current', name: 'Your Location', city: 'Your Location', state: '', lat, lng },
    timestamp: Date.now(),
    ttl: 60 * 60 * 1000,
  };
  const key = `weather_cache_v2_current_${lat}_${lng}`;
  localStorage.setItem(key, JSON.stringify(cached));

  render(<WeatherWidget compact={false} />);

  expect(await screen.findByText(/80°F/)).toBeInTheDocument();
  const calls = (global.fetch as any).mock.calls
    .map((c: any[]) => c[0])
    .filter((u: string) => u.includes('api.open-meteo.com'));
  expect(calls.length).toBe(0);
});

it('supports keyboard navigation to open dropdown and select location', async () => {
  mockGeoFailure();

  render(<WeatherWidget compact />);

  const dropdown = await screen.findByLabelText('Open location weather dropdown');
  fireEvent.keyDown(dropdown, { key: 'Enter', code: 'Enter' });

  const nyOption = await screen.findByText('New York, NY');
  fireEvent.click(nyOption);

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('latitude=40.7128&longitude=-74.006')
    );
  });
});
