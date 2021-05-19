import React from "react";

// Components
import MoveButton from "../MoveButton";
import Heading from "../Heading";

function StepOne(props) {
  const { setCurrentSection } = props;
  return (
    <div className="Step-One">
      <Heading text={"Step 1: Select Your Days Per Week"} />

      <MoveButton
        setCurrentSection={setCurrentSection}
        nextSection={2}
        text={"Next"}
      />
    </div>
  );
}

export default StepOne;
