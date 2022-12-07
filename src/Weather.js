import React from "react";

export default function Weather(props) {
  console.log(props.weatherDescription);
  return (
    <div className="Weather row mt-4">
      <div className="col-12">
        <ul>
          <li></li>
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
          <li>{props.weatherDescription}</li>
          <li>Humidity: {props.humidity}%</li>
          <li>Wind: {props.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
