import React from "react";

// Components
import MoveButton from "../MoveButton";
import Heading from "../Heading";
import SelectionModal from "../ExerciseSelection/SelectionModal";

function StepThree({ setCurrentSection, days }) {
  return (
    <div>
      <Heading text={"Step 3: Select Your Exercises"} />

      <SelectionModal days={days} />

      <MoveButton
        setCurrentSection={setCurrentSection}
        nextSection={2}
        text={"Back"}
      />
    </div>
  );
}

export default StepThree;
