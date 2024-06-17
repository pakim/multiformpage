import { useState } from "react";
import "./app.scss";
import Step from "./components/Step";
import Info from "./components/Info";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="container">
      <div className="sidebar">
        <Step number={1} title="Your info" step={step} setStep={setStep} />
        <Step number={2} title="Select plan" step={step} setStep={setStep} />
        <Step number={3} title="Add-ons" step={step} setStep={setStep} />
        <Step number={4} title="Summary" step={step} setStep={setStep} />
        <div
          className={
            step === 1
              ? "num-background"
              : step === 2
              ? "num-background two"
              : step === 3
              ? "num-background three"
              : "num-background four"
          }
        ></div>
      </div>
      <div className="forms">
        <Info step={step} />
      </div>
    </div>
  );
}

export default App;
