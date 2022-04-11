import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import Cronometro from "./components/Cronometro/Cronometro";
import DigitalClock from "./components/DigitalClock/DigitalClock";

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <Countdown></Countdown>
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;
