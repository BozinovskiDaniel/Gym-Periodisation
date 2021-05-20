import React, { useState } from "react";
import "../styling/Home.css";
import logo from "../images/logo.png";

// Components
import StepOne from "../components/steps/StepOne";
import StepTwo from "../components/steps/StepTwo";
import StepThree from "../components/steps/StepThree";

function Home() {
  const [currentSection, setCurrentSection] = useState(1);
  const [value, setValue] = useState(3);

  return (
    <div className="Home-page">
      <div className="Middle-box">
        <img src={logo} alt="logo" className="logo" />
        {currentSection === 1 && (
          <StepOne
            value={value}
            setValue={setValue}
            setCurrentSection={setCurrentSection}
          />
        )}

        {currentSection === 2 && (
          <StepTwo value={value} setCurrentSection={setCurrentSection} />
        )}

        {currentSection === 3 && (
          <StepThree setCurrentSection={setCurrentSection} />
        )}
      </div>
    </div>
  );
}

export default Home;
