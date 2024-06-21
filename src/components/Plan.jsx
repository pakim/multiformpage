import Buttons from "./Buttons";

const Plan = ({ step, setStep, plans, yearly, setYearly, plan, setPlan }) => {
  const handleSubmit = e => {
    e.preventDefault();

    setStep(step + 1);
  }
  return (
    <div className={step > 2 ? "form plan prev" : step < 2 ? "form plan next" : "form plan"}>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
          <div className="plans">
            <div
              className={plan === 0 ? "plan-container selected" : "plan-container"}
              onClick={() => setPlan(0)}
            >
              <img src={plans[0].image} alt="arcade icon" />
              <div className="plan-info">
                <span className="plan-name">{plans[0].name}</span>
                <span className="plan-price">{yearly ? `$${plans[0].yearly}/yr` : `$${plans[0].monthly}/mo`}</span>
                {yearly && <span className="free">2 months free</span>}
              </div>
            </div>
            <div
              className={plan === 1 ? "plan-container selected" : "plan-container"}
              onClick={() => setPlan(1)}
            >
              <img src={plans[1].image} alt="advanced icon" />
              <div className="plan-info">
                <span className="plan-name">{plans[1].name}</span>
                <span className="plan-price">{yearly ? `$${plans[1].yearly}/yr` : `$${plans[1].monthly}/mo`}</span>
                {yearly && <span className="free">2 months free</span>}
              </div>
            </div>
            <div
              className={plan === 2 ? "plan-container selected" : "plan-container"}
              onClick={() => setPlan(2)}
            >
              <img src={plans[2].image} alt="pro icon" />
              <div className="plan-info">
                <span className="plan-name">{plans[2].name}</span>
                <span className="plan-price">{yearly ? `$${plans[2].yearly}/yr` : `$${plans[2].monthly}/mo`}</span>
                {yearly && <span className="free">2 months free</span>}
              </div>
            </div>
          </div>
          <div className="rate">
            <span className={yearly ? "" : "selected"}>Monthly</span>
            <label className="switch">
              <input type="checkbox" checked={yearly} onChange={e => setYearly(e.target.checked)} />
              <span className="slider"></span>
            </label>
            <span className={yearly ? "selected" : ""}>Yearly</span>
          </div>
        </div>
        <Buttons step={2} setStep={setStep} />
      </form>
    </div>
  );
};

export default Plan;
