import React, { useState, useEffect } from "react";
import ShowLaps from "./components/ShowLaps";
import ShowTime from "./components/ShowTime";
import Button from "./components/Button";

import "./styles.css";

function App() {
  const [numLaps, setNumLaps] = useState(0);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTime((old) => old + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  const increment = () => {
    setNumLaps(numLaps + 1);
  };

  const decrement = () => {
    setNumLaps(numLaps - 1);
  };

  const handleReset = () => {
    setNumLaps(0);
    setTime(0);
  };

  return (
    <div className="App">
      <ShowLaps laps={numLaps} />
      <Button text="-" onClick={decrement} />
      <Button text="+" onClick={increment} />
      <ShowTime time={time} text="Tempo total" />
      {numLaps > 0 && (
        <ShowTime
          time={Math.round(time / numLaps)}
          text="Tempo medio por volta"
        />
      )}
      <Button text="Iniciar" onClick={toggleRunning} />
      <Button text="Reiniciar" onClick={handleReset} />
    </div>
  );
}

export default App;
