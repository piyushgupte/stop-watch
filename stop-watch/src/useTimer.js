import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = (init ) => {
  const [seconds, setSeconds] = useState(init);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = useCallback(() => {
    setIsRunning(true);
    setSeconds(5);
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  }, [setIsRunning, setSeconds]);

  useEffect(() => {
    return timerRef && clearInterval(timerRef.current)
  }, []);

  useEffect(() => {
    if (seconds < 1) stop();
  }, [seconds, isRunning]);

  const stop = useCallback(() => {
    setSeconds(0);
    setIsRunning(false);
    clearInterval(timerRef.current);
  }, [setIsRunning, setSeconds]);


  return { seconds, start, stop, isRunning };
};

export default useTimer;
