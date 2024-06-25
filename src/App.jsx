import { useState } from "react";
import "./app.scss";
import Step from "./components/Step";
import Info from "./components/Info";
import Plan from "./components/Plan";
import Addon from "./components/Addon";
import Summary from "./components/Summary";
import { plans, addons } from "./data.jsx";
import Confirm from "./components/Confirm.jsx";

function App() {
  const [step, setStep] = useState(1);
  const [yearly, setYearly] = useState(false);
  const [plan, setPlan] = useState(0);
  const [infoCompleted, setInfoCompleted] = useState(false);
  const [included, setIncluded] = useState([true, true, false]);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="container">
      <div className="sidebar">
        <Step
          number={1}
          title="Your info"
          step={step}
          setStep={setStep}
          completed={infoCompleted}
        />
        <Step
          number={2}
          title="Select plan"
          step={step}
          setStep={setStep}
          completed={infoCompleted}
        />
        <Step number={3} title="Add-ons" step={step} setStep={setStep} completed={infoCompleted} />
        <Step number={4} title="Summary" step={step} setStep={setStep} completed={infoCompleted} />
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
        <Info
          step={step}
          info={info}
          setInfo={setInfo}
          setInfoCompleted={setInfoCompleted}
          setStep={setStep}
        />
        <Plan
          step={step}
          setStep={setStep}
          plans={plans}
          yearly={yearly}
          setYearly={setYearly}
          plan={plan}
          setPlan={setPlan}
        />
        <Addon
          step={step}
          setStep={setStep}
          yearly={yearly}
          addons={addons}
          included={included}
          setIncluded={setIncluded}
        />
        <Summary
          step={step}
          setStep={setStep}
          yearly={yearly}
          plans={plans}
          addons={addons}
          plan={plan}
          included={included}
        />
        <Confirm step={step} />
      </div>
    </div>
  );
}

export default App;
