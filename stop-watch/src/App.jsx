import "./App.css";
import useTimer from "./useTimer";

function App() {
  const { isRunning, seconds, start, stop } = useTimer(5);

  return (
    <>
      <div className="container">
        <div className="row">
          {isRunning ? seconds : "Please start the timer."}
        </div>
        <div>
          <button disabled={isRunning} onClick={start}>Start</button>
          <button disabled={!isRunning} onClick={stop}>Stop</button>
        </div>
      </div>
    </>
  );
}

export default App;
