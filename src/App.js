import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App
        </h1>
        <Weather city="Madrid" />
        <a href="https://github.com/lynchycat21/weather-react-app">Open source code</a> by Cathy Lynch.
      </header>
    </div>
  );
}

export default App;
