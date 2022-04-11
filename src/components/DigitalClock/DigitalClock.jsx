import React, { useEffect, useState } from "react";

export default function DigitalClock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="digital-clock">
      <h2>{clockState}</h2>
    </div>
  );
}
