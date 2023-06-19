import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);

  let globalUnit = "metric";

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

  function searchCity(city) {
    let apiKey = "e060f7b7t14cca4123801e32a3d6adob";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${globalUnit}`;
    axios.get(apiUrl).then(showTemperature);
  }
}

if (true) {
  return <App />;
} else {
  return "loading";
}

searchCity("Milan");
