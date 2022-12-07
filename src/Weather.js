import React from "react";

export default function Weather(props) {
  console.log(props.weatherDescription);
  return (
    <div className="Weather row mt-4">
      <div className="col-12">
        <ul>
          <li>{props.city}</li>
          <li></li>
        </ul>
      </div>
      <div className="col-3">
        <img src={props.imageSrc} alt={props.weatherDescription} />
      </div>
      <div className="col-3">{props.temperature}°C</div>
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
