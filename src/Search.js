import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let searchedCity = city;
      let apiKey = `738993d32099f81cb584e637be73ea30`;
      let units = `metric`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(showWeather);
    }
  }

  function searchCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      {" "}
      <div className="row m-3">
        <div className="col-6">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city.."
            autoFocus
            onChange={searchCity}
          />
        </div>
        <div className="col-3 ">
          <button type="submit" className="btn btn-primary px-4">
            Search
          </button>
        </div>
        <div className="col-3">
          <button className="btn btn-success px-4">Search</button>
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div className="Search">
        <h1>Weather App</h1>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>{weather.description}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <h1>Weather App</h1>
        {form}
      </div>
    );
  }
}
