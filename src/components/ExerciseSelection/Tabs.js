import React from "react";

function Tabs({ days }) {
  console.log(days);
  return (
    <div className="left-modal">
      {days.map((d) => {
        return d;
      })}
    </div>
  );
}

export default Tabs;
