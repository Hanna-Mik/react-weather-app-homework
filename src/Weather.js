import React from "react";

export default function Weather(props) {
  function showTime() {
    let date = new Date(props.date * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
  return (
    <div className="Weather row mt-4">
      <div className="col-12 cityName">{props.city}</div>
      <div className="col-12 mb-4">Last updated: {showTime()}</div>
      <div className="col-3">
        <img src={props.imageSrc} alt={props.weatherDescription} />
      </div>
      <div className="col-3 temperature">
        {props.temperature}
        <span className="units">°C</span>{" "}
      </div>
      <div className="col-6">
        {" "}
        <ul>
          <li>
            <strong>{props.weatherDescription}</strong>
          </li>
          <li>Feels like {props.feelsLike}°C</li>
          <li>Humidity: {props.humidity}%</li>
          <li>Pressure: {props.pressure}hPa</li>
          <li>Wind: {props.wind}m/s</li>
        </ul>
      </div>
    </div>
  );
}
