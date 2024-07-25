import { useState } from 'react';

// Mock data
const mockWeatherData = {
  'New York': {
    temperature: '22°C',
    humidity: '56%',
    windSpeed: '15 km/h'
  },
  'Los Angeles': {
    temperature: '27°C',
    humidity: '45%',
    windSpeed: '10 km/h'
  },
  'London': {
    temperature: '15°C',
    humidity: '70%',
    windSpeed: '20 km/h'
  }
};

// Componente para los botones del historial
function HistoryButton({ city, onClick }) {
  return (
    <button key={city} id="cityButton" onClick={() => onClick(city)}>
      {city}
    </button>
  );
}

// Componente principal del tablero de clima
function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (mockWeatherData[city]) {
      setWeather(mockWeatherData[city]);
      setError('');
      if (!history.includes(city)) {
        setHistory([...history, city]);
      }
    } else {
      setWeather(null);
      setError('City not found.');
    }
  };

  const handleCityClick = (city) => {
    setCity(city);
    setWeather(mockWeatherData[city]);
    setError('');
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>Search</button>
      <div id="previousSearches">
        {history.map(city => (
          <HistoryButton key={city} city={city} onClick={handleCityClick} />
        ))}
      </div>
      <div id="weatherData">
        {weather ? (
          <>
            <div>Temperature: {weather.temperature}</div>
            <div>Humidity: {weather.humidity}</div>
            <div>Wind Speed: {weather.windSpeed}</div>
          </>
        ) : (
          error && <div>{error}</div>
        )}
      </div>
    </div>
  );
}

export default WeatherDashboard;
