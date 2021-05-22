import React from "react";

function Tabs({ days }) {
  console.log(days);
  return (
    <div className="left-modal">
      {days.map((d) => {
        return <button>{d}</button>;
      })}
    </div>
  );
}

export default Tabs;
