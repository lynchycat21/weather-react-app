import React from "react";
import axios from 'axios';

export default function Weather(props) {
    function showTemperature(response) {
        alert(`The weather in Madrid is ${response.data.main.temp}°C`);
    }
  let apiKey = "9036b9a17b31220b33901d3c3a2c9847";
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);


  let weatherData = {
    city: "Barcelona",
    date: "Wednesday 30th December",
    description: "Partly Cloudy",
    humidity: "62%",
    wind: "8.5km/h",
    temperature: "3"
  };

  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city"
              autofocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-outline-secondary w-100"
            />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-outline-secondary w-100">
              My Location
            </button>
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">°C </span>
            </div>
          </div>
        </div>
        <div className="col-9">
          <ul>
            <li>
              <i class="fas fa-cloud-sun"></i>
            </li>
            <br />
            <li>Humidity: {weatherData.humidity}</li>
            <li>Wind: {weatherData.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}