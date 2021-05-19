import React from "react";

// Components
import MoveButton from "../MoveButton";
import Heading from "../Heading";

function StepTwo(props) {
  const { setCurrentSection } = props;
  return (
    <div>
      <Heading text={"Step 2: Select What Days You Prefer"} />
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
