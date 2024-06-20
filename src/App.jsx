import { useState } from "react";
import "./app.scss";
import Step from "./components/Step";
import Info from "./components/Info";
import Plan from "./components/Plan";
import Addon from "./components/Addon";
import Summary from "./components/Summary";

function App() {
  const [step, setStep] = useState(1);
  const [yearly, setYearly] = useState(false);
  const [plan, setPlan] = useState(0);
  const [infoCompleted, setInfoCompleted] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const plans = [
    {
      name: "Arcade",
      monthly: "$9/mo",
      yearly: "90/yr",
    },
    {
      name: "Advanced",
      monthly: "$12/mo",
      yearly: "$120/yr",
    },
    {
      name: "Arcade",
      monthly: "$15/mo",
      yearly: "$150/yr",
    },
  ];

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
        <Plan step={step} setStep={setStep} plans={plans} yearly={yearly} setYearly={setYearly} plan={plan} />
        <Addon step={step} setStep={setStep} />
        <Summary step={step} setStep={setStep} />
      </div>
    </div>
  );
}

export default App;
