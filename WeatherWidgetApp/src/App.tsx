import React from 'react'
import './App.css'
import WeatherDisplay from './components/WeatherDisplay'
import { WeatherProvider } from './context/WeatherContext'

/**
 * Main App Component
 * Wraps the Weather Widget in context providers and renders the standalone app
 */
function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <div className="app__container">
          <header className="app__header">
            <h1>Weather Widget</h1>
            <p>Real-time Weather Information</p>
          </header>

          <main className="app__main">
            <WeatherDisplay />
          </main>

          <footer className="app__footer">
            <p>&copy; 2026 Weather Widget App. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </WeatherProvider>
  )
}

export default App
