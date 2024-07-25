import { useState } from 'react';
import './styles/WeatherDashboard.css';

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
    <div className="weather-dashboard">
      <input
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="city-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      <div className="history">
        {history.map(city => (
          <button key={city} onClick={() => handleCityClick(city)} className="city-button">
            {city}
          </button>
        ))}
      </div>
      <div className="weather-data">
        {weather ? (
          <>
            <div>Temperature: {weather.temperature}</div>
            <div>Humidity: {weather.humidity}</div>
            <div>Wind Speed: {weather.windSpeed}</div>
          </>
        ) : (
          error && <div className="error-message">{error}</div>
        )}
      </div>
    </div>
  );
}

export default WeatherDashboard;
