import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { fetchWeatherByCoords, geocode } from './weather';

export type MenuItem = { label: string; href?: string; onClick?: () => void };

type Props = {
  title?: string;
  items?: MenuItem[];
  facilities?: string[];
  onSelectFacility?: (name: string) => void;
  refreshMinutes?: number;
};

export default function Header({ title = 'Reliability', items = [], facilities = [], onSelectFacility, refreshMinutes }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const [weatherOpen, setWeatherOpen] = useState(false);
  const [weather, setWeather] = useState<any>({ loading: true });
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
      const w = document.getElementById('weather-dropdown');
      const wb = document.getElementById('weather-button');
      if (w && wb && !w.contains(e.target as Node) && !wb.contains(e.target as Node)) setWeatherOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  useEffect(() => {
    let mounted = true;
    async function loadGeo() {
      try {
        const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
          if (!navigator.geolocation) reject(new Error('No geolocation'));
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        if (!mounted) return;
        setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        const w = await fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
        if (!mounted) return;
        setWeather(w);
      } catch (e: any) {
        if (!mounted) return;
        setWeather({ loading: false, error: e?.message || 'Failed' });
      }
    }
    loadGeo();
    return () => { mounted = false; };
  }, []);

  async function doSearch(q: string) {
    setQuery(q);
    if (!q || q.length < 2) return setResults([]);
    try {
      const r = await geocode(q);
      setResults(r.slice(0, 6));
    } catch (e) {
      setResults([]);
    }
  }

  return (
    <header className="c3-header">
      <div className="brand">{title}</div>
      <div className="actions">
        <div className="dropdown-wrapper">
          <button className="dropdown-toggle" aria-haspopup="true" aria-expanded={open} onClick={() => setOpen((v) => !v)} id="main-menu-button">
            Menu ▾
          </button>
          <ul ref={menuRef} className={`dropdown-menu ${open ? 'open' : ''}`} role="menu" aria-hidden={!open}>
            {items.map((it, i) => (
              <li key={i} role="none">
                {it.href ? (
                  <a role="menuitem" href={it.href} className="dropdown-item" onClick={() => setOpen(false)}>{it.label}</a>
                ) : (
                  <button role="menuitem" className="dropdown-item" onClick={() => { setOpen(false); it.onClick?.(); }}>{it.label}</button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="weather-wrapper">
          <button id="weather-button" className="weather-toggle" onClick={() => setWeatherOpen((v) => !v)} aria-haspopup="true" aria-expanded={weatherOpen}>
            {weather.loading ? '⏳' : weather.error ? '⚠️' : `${Math.round(weather.temperature || 0)}° ${weather.icon || ''}`}
          </button>
          <div id="weather-dropdown" className={`dropdown-menu weather-menu ${weatherOpen ? 'open' : ''}`} role="menu" aria-hidden={!weatherOpen}>
            <div className="weather-section">
              <div className="title">Your Location</div>
              <div className="place">{weather.placeName || 'Detecting...'}</div>
            </div>
            {facilities.length > 0 && (
              <div className="weather-section">
                <div className="title">Selected Facilities</div>
                <ul className="facility-list">
                  {facilities.map((f, i) => <li key={i}><button className="dropdown-item" onClick={() => onSelectFacility?.(f)}>{f}</button></li>)}
                </ul>
              </div>
            )}
            <div className="weather-section">
              <div className="title">Change location</div>
              <input aria-label="Search city or zip" placeholder="City or zip" value={query} onChange={(e) => doSearch(e.target.value)} className="weather-search" />
              <div className="search-results">
                {results.map((r, i) => (
                  <button key={i} className="dropdown-item" onClick={() => { setCoords({ lat: r.lat, lon: r.lon }); setWeatherOpen(false); fetchWeatherByCoords(r.lat, r.lon).then(setWeather); }}>{r.name}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
