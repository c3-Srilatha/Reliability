# MUI Weather Widget

This folder contains the updated `WeatherWidget.tsx` using MUI components with:

- Compact header dropdown with Your Location (Auto), facilities list, and Custom Location dialog
- Geolocation default, configurable refresh interval, Celsius/°F toggle
- Loading and error handling, accessible keyboard interactions

## File
- WeatherWidget.tsx: drop-in React component

## Usage
Import and render `WeatherWidget` in your header. For admin controls in full view, render with `compact={false}` and `admin={true}`.
