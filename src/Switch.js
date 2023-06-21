import React, { useState } from "react";
import "./App.css";

export default function Switch() {
  const [temperatureSwitch, settemperatureSwitch] = useState(null);

  function unitConvertTemp(event) {
    event.preventDefault();

    settemperatureSwitch({
      currentSwitchPosition: event.value,
      temperatureElement: event.temperature,
      fahrenheitConversion: Math.round((baseTemperature * 9) / 5 + 32),
      celciusConversion: Math.round((baseTemperature - 32) * 5) / 9,
      baseTemperature: null,
      globalUnit: "metric",
    });

    if (currentSwitchPosition === "on") {
      if (globalUnit === "metric") {
        return { fahrenheitConversion };
      } else {
        {
          baseTemperature;
        }
      }
      globalUnit = "imperial";
      temperatureSwitch = "off";
    } else {
      if (globalUnit === "imperial") {
        return { celciusConversion };
      } else {
        {
          baseTemperature;
        }
      }
      globalUnit = "metric";
      temperatureSwitch.value = "on";
    }
  }

  return (
    <div class="container">
      <div class="weather-app">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="tempSwitch"
            onChange={unitConvertTemp}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Fahrenheit
          </label>
        </div>
      </div>
    </div>
  );
}
