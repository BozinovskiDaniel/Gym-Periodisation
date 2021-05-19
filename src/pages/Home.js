import React, { useState } from "react";
import "../styling/Home.css";

// Components
import StepOne from "../components/steps/StepOne";
import StepTwo from "../components/steps/StepTwo";
import StepThree from "../components/steps/StepThree";

function Home() {
  const [currentSection, setCurrentSection] = useState(1);

  return (
    <div className="Home-page">
      <div className="Middle-box">
        {currentSection === 1 && (
          <StepOne setCurrentSection={setCurrentSection} />
        )}

        {currentSection === 2 && (
          <StepTwo setCurrentSection={setCurrentSection} />
        )}

        {currentSection === 3 && (
          <StepThree setCurrentSection={setCurrentSection} />
        )}
      </div>
    </div>
  );
}

export default Home;
