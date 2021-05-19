import React from "react";

// Components
import MoveButton from "../MoveButton";
import Heading from "../Heading";
import DaysSequence from "../DaysSequence";

function StepTwo(props) {
  const { setCurrentSection } = props;
  return (
    <div>
      <Heading text={"Step 2: Select What Days You Prefer"} />

      <DaysSequence />

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
