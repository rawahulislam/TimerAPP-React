import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [start, setStart] = useState(Date.now());
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      let elapsed = Math.floor((Date.now() - start) / 1000);
      setSeconds(elapsed % 60);
      setMinutes(Math.floor(elapsed / 60) % 60);
      setHours(Math.floor(elapsed / 3600));
    }, 1000);
//hr
    return () => {
      clearInterval(id);
    };
  }, [start]);

  return (
    <div className="App">
      <h1>Timer App</h1>
      <h2>{`${hours}:${minutes}:${seconds.toString().padStart(2, "0")}`}</h2>

      <button onClick={() => setStart(Date.now())}>Reset</button>
    </div>
  );
}
