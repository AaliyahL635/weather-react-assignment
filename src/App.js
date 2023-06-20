import "./App.css";
import "./Weather.js";
import "./Switch.js";

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

      <Switch />
      <Weather defaultCity="Milan" />

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
  );
}
