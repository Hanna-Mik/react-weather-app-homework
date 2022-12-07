import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      date: response.data.dt,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
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
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city.."
            autoFocus
            onChange={searchCity}
          />
        </div>
        <div className="col-2 ">
          <button type="submit" className="btn btn-primary px-4">
            Search
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-success px-4">Current</button>
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div className="Search">
        <h1>Weather App</h1>
        {form}
        <Weather
          city={weather.city}
          date={weather.date}
          temperature={Math.round(weather.temperature)}
          feelsLike={Math.round(weather.feelsLike)}
          pressure={weather.pressure}
          humidity={weather.humidity}
          wind={Math.round(weather.wind)}
          weatherDescription={weather.description}
          imageSrc={weather.icon}
          imageAlt={weather.description}
        />
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
