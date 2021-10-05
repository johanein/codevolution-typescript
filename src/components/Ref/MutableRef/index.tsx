import { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const timerRef = useRef<number | null>(null); // give number in case of setTimeout or setInterval
  const [timer, setTimer] = useState(0);

  const hanldeTimerStopClick = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimer((c) => c + 1);
    }, 1000);
    return () => {
      hanldeTimerStopClick();
    };
  }, []);

  return (
    <div>
      <h1>Timer {timer}</h1>
      <button onClick={hanldeTimerStopClick}>stop timer</button>
    </div>
  );
};

export default MutableRef;
