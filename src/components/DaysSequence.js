import React from "react";

// CSS
import "../styling/DaysSequence.css";

function DaysSequence() {
  return (
    <div className="main-grid">
      <button className="day-button">Monday</button>

      <button className="day-button">Tuesday</button>

      <button className="day-button">Wednesday</button>

      <button className="day-button">Thursday</button>

      <button className="day-button">Friday</button>

      <button className="day-button">Saturday</button>

      <button className="day-button">Sunday</button>
    </div>
  );
}

export default DaysSequence;
