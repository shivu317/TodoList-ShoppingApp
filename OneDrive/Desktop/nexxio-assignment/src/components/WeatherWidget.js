import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/WeatherWidget.css';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'ec2cb3d5dec30f841fa5811c60bd460c';
  const city = 'india'; 

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.log(error));
  }, [apiKey, city]);

  return (
    <div>
      <h2>Weather Widget</h2>
      {weatherData ? (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
