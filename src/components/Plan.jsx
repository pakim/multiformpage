import Buttons from "./Buttons";


const Plan = ({ step, setStep, plans, yearly, setYearly, plan }) => {
  return (
    <div className={step > 2 ? "form plan prev" : step < 2 ? "form plan next" : "form plan"}>
      <form noValidate>
        <div>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
          <div className="plans">
            <div className="plan-container">
              <img src="src/assets/images/icon-arcade.svg" alt="arcade icon" />
              <div className="plan-info">
                <span className="plan-name">{plans[0].name}</span>
                <span className="plan-price">{yearly ? plans[0].yearly : plans[0].monthly}</span>
              </div>
            </div>
            <div className="plan-container">
              <img src="src/assets/images/icon-advanced.svg" alt="advanced icon" />
              <div className="plan-info">
                <span className="plan-name">{plans[1].name}</span>
                <span className="plan-price">{yearly ? plans[1].yearly : plans[1].monthly}</span>
              </div>
            </div>
            <div className="plan-container">
              <img src="src/assets/images/icon-pro.svg" alt="pro icon" />
              <div className="plan-info">
                <span className="plan-name">{plans[2].name}</span>
                <span className="plan-price">{yearly ? plans[2].yearly : plans[2].monthly}</span>
              </div>
            </div>
          </div>
        </div>
        <Buttons step={2} setStep={setStep} />
      </form>
    </div>
  );
};

export default Plan;
