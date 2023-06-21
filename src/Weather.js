import React, { useState } from "react";
import "./App.css";
import "./Switch.js";

import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: true });
  const [city, setCity] = useState(props.defaultCity);
  function showTemperature(response) {
    console.log(response);
    setWeatherData({
      basetemperature: response.data.temperature.current,
      city: response.data.city,
      icon: response.data.weather[0].icon,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      currentdate: response.data.time * 1000,
    });
  }
  function search() {}
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function searchCity() {
    let apiKey = "e060f7b7t14cca4123801e32a3d6adob";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  if (weatherData.ready) {
    return (
      <div>
        <form class="search-form" id="search-form" onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-6">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                id="city-input"
                class="form-control shadow-sm"
                onChange={handleCityChange}
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="form-control btn btn-primary shadow-sm w-100"
              />
            </div>
            <div class="col-3">
              <button
                class="btn btn-success w-100"
                id="current-location-button"
              >
                Current
              </button>
            </div>
          </div>
        </form>

        {weatherData && (
          <div class="row">
            <div class="col-6">
              <h1 id="city">{city}</h1>
              <p id="currentDate">{weatherData.currentdate}</p>
              <p id="currentFeel">{weatherData.description}</p>
              <ul>
                <li class="col1">
                  Humidity:{" "}
                  <span id="humidity">
                    <strong>{weatherData.humidity}</strong>
                  </span>
                  %, <span class="col1">Wind: </span>{" "}
                  <span id="wind">
                    <strong>{weatherData.wind}</strong>
                  </span>
                  km/h
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-8">
              <span />
              <div class="col2">
                <div class="clearfix weather-temperature">
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                    alt="Clear"
                    id="icon"
                    class="float-right"
                  />
                  <span id="tempElement">{weatherData.basetemperature}</span>
                  <span id="unit"></span>
                  <span />
                </div>
              </div>
            </div>
          </div>
        )}

        <br />

        <div class="WeatherForecast row" id="forecast"></div>
      </div>
    );
  } else {
    searchCity("Milan");
    return "loading";
  }
}
