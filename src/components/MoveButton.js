import React from "react";

function MoveButton(props) {
  const { setCurrentSection, nextSection, text } = props;
  return (
    <button
      className="Move-button"
      onClick={() => setCurrentSection(nextSection)}
    >
      {text}
    </button>
  );
}

export default MoveButton;
