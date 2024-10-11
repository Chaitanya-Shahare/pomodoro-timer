import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isRunning) {
      let timer = setInterval(() => {
        if (seconds === 0) {

          if (minutes === 0) {
            setIsRunning(false);
            return;
          }

          setSeconds(59);
          setMinutes((min) => min - 1);
        } else {
          setSeconds((sec) => sec - 1);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isRunning, minutes, seconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card__timer">
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
        <div className="card__actions">
          <button className="card__btn card__btn--green" onClick={handleStart}>
            Start
          </button>
          <button className="card__btn card__btn--grey" onClick={handlePause}>
            Pause
          </button>
          <button className="card__btn card__btn--red" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
