import React from "react";

// CSS
import "../styling/DaysSequence.css";

function DaysSequence({ setDays, days }) {
  // Checks if the day is selected
  const checkIfDaySelected = (givenDay) => {
    for (let i = 0; i < days.length; i++) {
      if (days[i] === givenDay) {
        return true;
      }
    }

    return false;
  };

  const addOrRemoveDay = (givenDay) => {
    // Remove the day
    if (checkIfDaySelected(givenDay)) {
    } else {
      // Add the day
      setDays([...days, givenDay]);
    }
  };

  return (
    <div className="main-grid">
      <button
        className="day-button"
        style={{
          backgroundColor:
            checkIfDaySelected("Monday") && "rgba(141, 135, 65, 1)",
        }}
      >
        Monday
      </button>

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
