import React from "react";

function Heading(props) {
  const { text } = props;
  return <h1 style={{ fontSize: "20px", padding: "10px" }}>{text}</h1>;
}

export default Heading;
