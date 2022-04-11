import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

const getDate = (e) => {
    setDate(e.target.value)
}
  
  useEffect(() => {
   
    if (isNaN(date)){
    let countDownDate = new Date(date).getTime();
    
    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }
    }, 1000);
    }
  }, [date]);
  return (
    <div className="countdown">
      <h2>{time}</h2>

      <input type="date" onChange={getDate} />
    </div>
  );
}
