import "./App.css";
import "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Parcel Sandbox</title>
        <meta charset="UTF-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
      </header>
      <div class="container">
        <div class="weather-app">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="tempSwitch"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Fahrenheit
            </label>
          </div>

          <br />
          <form class="search-form" id="search-form">
            <div class="row">
              <div class="col-6">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autofocus="on"
                  autocomplete="off"
                  id="city-input"
                  class="form-control shadow-sm"
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

          <br />

          <div class="row">
            <div class="col-6">
              <h1 id="city">Milan, Metropolitan City of Milan</h1>
              <p id="currentDate">Date</p>
              <p id="currentFeel"></p>
              <ul>
                <li class="col1">
                  Humidity:{" "}
                  <span id="humidity">
                    <strong>76</strong>
                  </span>
                  %, <span class="col1">Wind: </span>{" "}
                  <span id="wind">
                    <strong>6.17</strong>
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
                  <span id="tempElement">14</span>
                  <span id="unit"></span>
                  <span />
                </div>
              </div>
            </div>
          </div>

          <br />

          <div class="WeatherForecast row" id="forecast"></div>

          <footer>
            This project was coded by Aaliyah Lahai and is{" "}
            <a
              href="https://github.com/AaliyahL635/weather-react-assignment"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://master--neon-choux-656c2a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>

          <script src="src/index.js"></script>
        </div>
      </div>
      <div />
    </div>
  );
}
