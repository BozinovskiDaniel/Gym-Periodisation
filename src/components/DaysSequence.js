import React from "react";

// CSS
import "../styling/DaysSequence.css";

// Material UI
import Button from "@material-ui/core/Button";

function DaysSequence({ setDays, days, value }) {
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
      const index = days.indexOf(givenDay); // Find index

      const daysCopy = [...days];

      // If the index is valid, remove it from array
      if (index > -1) {
        daysCopy.splice(index, 1);
      }

      setDays(daysCopy); // Set the state of new array
    } else {
      if (days.length < value) {
        // Add the day
        setDays([...days, givenDay]);
      }
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
        onClick={() => addOrRemoveDay("Monday")}
      >
        Monday
      </button>

      <button
        className="day-button"
        style={{
          backgroundColor:
            checkIfDaySelected("Tuesday") && "rgba(141, 135, 65, 1)",
        }}
        onClick={() => addOrRemoveDay("Tuesday")}
      >
        Tuesday
      </button>

      <button
        className="day-button"
        style={{
          backgroundColor:
            checkIfDaySelected("Wednesday") && "rgba(141, 135, 65, 1)",
        }}
        onClick={() => addOrRemoveDay("Wednesday")}
      >
        Wednesday
      </button>

      <button
        className="day-button"
        style={{
          backgroundColor:
            checkIfDaySelected("Thursday") && "rgba(141, 135, 65, 1)",
        }}
        onClick={() => addOrRemoveDay("Thursday")}
      >
        Thursday
      </button>

      <button
        className="day-button"
        style={{
          backgroundColor:
            checkIfDaySelected("Friday") && "rgba(141, 135, 65, 1)",
        }}
        onClick={() => addOrRemoveDay("Friday")}
      >
        Friday
      </button>

      <button
        className="day-button"
        style={{
          backgroundColor:
            checkIfDaySelected("Saturday") && "rgba(141, 135, 65, 1)",
        }}
        onClick={() => addOrRemoveDay("Saturday")}
      >
        Saturday
      </button>

      <button
        className="day-button"
        style={{
          backgroundColor:
            checkIfDaySelected("Sunday") && "rgba(141, 135, 65, 1)",
        }}
        onClick={() => addOrRemoveDay("Sunday")}
      >
        Sunday
      </button>
    </div>
  );
}

export default DaysSequence;
