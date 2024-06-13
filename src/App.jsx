import { useState } from "react";
import "./app.scss";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="step" onClick={() => setStep(1)}>
          <div className={step === 1 ? "step-number active" : "step-number"}>
            <span>1</span>
          </div>
          <div className="step-info">
            <div className="name">Step 1</div>
            <div className="title">Your info</div>
          </div>
        </div>
        <div className="step" onClick={() => setStep(2)}>
          <div className={step === 2 ? "step-number active" : "step-number"}>
            <span>2</span>
          </div>
          <div className="step-info">
            <div className="name">Step 2</div>
            <div className="title">Select plan</div>
          </div>
        </div>
        <div className="step" onClick={() => setStep(3)}>
          <div className={step === 3 ? "step-number active" : "step-number"}>
            <span>3</span>
          </div>
          <div className="step-info">
            <div className="name">Step 4</div>
            <div className="title">Add-ons</div>
          </div>
        </div>
        <div className="step" onClick={() => setStep(4)}>
          <div className={step === 4 ? "step-number active" : "step-number"}>
            <span>4</span>
          </div>
          <div className="step-info">
            <div className="name">Step 4</div>
            <div className="title">Summary</div>
          </div>
        </div>
      </div>
      <div className="forms"></div>
    </div>
  );
}

export default App;
