import React, { useState } from 'react';
import styles from './Weather.css';
import axios from 'axios';

export default function Weather(props) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  // const apiKey = "cdebc79a7f13d1e88c9e5734794a5f07";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=cdebc79a7f13d1e88c9e5734794a5f07`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="WeatherForecast">
      <div className="Search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter location"
          type="text"
        />
      </div>
      <div className="location">
        <p>Your location is: {data.name}</p>
        <div className="temp">
          {data.main ? (
            <p>
              The temperature in {data.name} is {Math.round(data.main.temp)}{' '}
              Celsius{' '}
            </p>
          ) : null}
        </div>
        <div className="description">
          {data.main ? <p> Description: {data.weather[0].main} </p> : null}
        </div>
        <div className="humidity">
          {data.main ? <p>Humidity: {data.main.humidity}% </p> : null}
        </div>
        <div className="wind">
          {data.wind ? <p>Wind Speed: {data.wind.speed} m/s</p> : null}
        </div>
      </div>
    </div>
  );
}
