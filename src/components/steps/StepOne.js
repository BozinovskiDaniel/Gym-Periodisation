import React from "react";

// Components
import MoveButton from "../MoveButton";

function StepOne(props) {
  const { setCurrentSection } = props;
  return (
    <div className="Step-One">
      <h1>Step 1: Select Your Days Per Week</h1>
      <MoveButton
        setCurrentSection={setCurrentSection}
        nextSection={2}
        text={"Next"}
      />
    </div>
  );
}

export default StepOne;
