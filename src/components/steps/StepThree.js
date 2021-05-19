import React from "react";

// Components
import MoveButton from "../MoveButton";
import Heading from "../Heading";

function StepThree(props) {
  const { setCurrentSection } = props;
  return (
    <div>
      <Heading text={"Step 3: Select Your Exercises"} />
      <MoveButton
        setCurrentSection={setCurrentSection}
        nextSection={2}
        text={"Back"}
      />
    </div>
  );
}

export default StepThree;
