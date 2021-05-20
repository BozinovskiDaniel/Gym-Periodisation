import React, { useState } from "react";

// Components
import MoveButton from "../MoveButton";
import Heading from "../Heading";
import DaysSequence from "../DaysSequence";

// CSS
import "../../styling/StepTwo.css";

// Material UI
import DoneIcon from "@material-ui/icons/Done";

function StepTwo({ setCurrentSection, value }) {
  const [days, setDays] = useState([]);

  return (
    <div>
      <Heading text={"Step 2: Select What Days You Prefer"} />

      <DaysSequence days={days} setDays={setDays} value={value} />

      <div className="count-section">
        {days.length} out of {value} selected
        {days.length == value && <DoneIcon />}
      </div>

      <MoveButton
        setCurrentSection={setCurrentSection}
        nextSection={3}
        text={"Next"}
      />
      <MoveButton
        setCurrentSection={setCurrentSection}
        nextSection={1}
        text={"Back"}
      />
    </div>
  );
}

export default StepTwo;
