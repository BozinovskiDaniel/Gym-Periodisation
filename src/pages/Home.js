import React, { useState } from "react";
import "../styling/Home.css";

// Redux
import { connect } from "react-redux";

// Components
import StepOne from "../components/steps/StepOne";
import StepTwo from "../components/steps/StepTwo";
import StepThree from "../components/steps/StepThree";

function Home() {
  const [currentSection, setCurrentSection] = useState(1);

  return (
    <div className="Home-page">
      {currentSection === 1 && <StepOne />}

      {currentSection === 2 && <StepTwo />}

      {currentSection === 3 && <StepThree />}
    </div>
  );
}

export default Home;
