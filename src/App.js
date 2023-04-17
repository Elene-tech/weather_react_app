import './App.css';
import React from 'react';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Weather />
      <a href="#">Link to web-page</a>
      <br />
      <br />
      <a href="https://github.com/Elene-tech/weather_react_app/tree/master">
        Link to GitHub Repository
      </a>
    </div>
  );
}

export default App;
