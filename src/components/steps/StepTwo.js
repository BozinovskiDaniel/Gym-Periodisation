import React from "react";

// Components
import MoveButton from "../MoveButton";

function StepTwo(props) {
  const { setCurrentSection } = props;
  return (
    <div>
      <h1>Step 2: Select What Days You Prefer</h1>
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
