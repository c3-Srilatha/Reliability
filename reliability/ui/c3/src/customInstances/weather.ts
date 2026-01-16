export async function fetchWeatherByCoords(lat: number, lon: number) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather API error');
  const data = await res.json();
  const cw = data.current_weather || {};
  const temperature = cw.temperature;
  const code = cw.weathercode;
  const { icon, label } = mapWeatherCodeToIcon(code);
  let placeName: string | undefined;
  try {
    const rev = await fetch(`https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&count=1`);
    if (rev.ok) {
      const pj = await rev.json();
      placeName = pj?.results?.[0]?.name || pj?.results?.[0]?.admin1 || pj?.results?.[0]?.country;
    }
  } catch (e) {}
  return { temperature, icon, label, placeName } as any;
}

export async function geocode(query: string) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Geocoding failed');
  const data = await res.json();
  return (data.results || []).map((r: any) => ({ name: `${r.name}${r.country ? ', ' + r.country : ''}`, lat: r.latitude, lon: r.longitude }));
}

function mapWeatherCodeToIcon(code: number) {
  if (code === 0) return { icon: '☀️', label: 'Clear' };
  if (code === 1 || code === 2) return { icon: '⛅', label: 'Partly cloudy' };
  if (code === 3) return { icon: '☁️', label: 'Cloudy' };
  if (code >= 45 && code <= 48) return { icon: '🌫️', label: 'Fog' };
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 86)) return { icon: '🌧️', label: 'Rain' };
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return { icon: '❄️', label: 'Snow' };
  if ((code >= 95 && code <= 99)) return { icon: '⛈️', label: 'Thunder' };
  return { icon: '🌤️', label: 'Unknown' };
}
