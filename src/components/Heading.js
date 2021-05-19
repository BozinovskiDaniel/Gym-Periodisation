import React from "react";

function Heading(props) {
  const { text } = props;
  return (
    <h1 style={{ fontSize: "1.4em", padding: "5px", marginBottom: "20px" }}>
      {text}
    </h1>
  );
}

export default Heading;
