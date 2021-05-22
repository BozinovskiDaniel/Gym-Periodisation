import React from "react";
import "../../styling/SelectionModal.css";

// Components
import Tabs from "./Tabs";

function SelectionModal({ days }) {
  return (
    <div className="selection-modal">
      <Tabs days={days} />

      <div className="right-modal"></div>
    </div>
  );
}

export default SelectionModal;
