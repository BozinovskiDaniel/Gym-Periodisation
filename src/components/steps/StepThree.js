import React from "react";

// Components
import MoveButton from "../MoveButton";

function StepThree(props) {
  const { setCurrentSection } = props;
  return (
    <div>
      <h1>Step 3: Select Your Exercises</h1>
      <MoveButton
        setCurrentSection={setCurrentSection}
        nextSection={2}
        text={"Back"}
      />
    </div>
  );
}

export default StepThree;
