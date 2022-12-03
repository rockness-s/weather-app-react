import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">

      <Weather defaultCity="Dnipro" />

      <footer>Coded by Inessa Kazmiruk. 
        <br></br>Open-sourced on {" "}
        <a href="https://github.com/rockness-s/weather-app-react" target="_blank" rel="noreferrer">GitHub</a>
        </footer>
    </div>

  );
}

