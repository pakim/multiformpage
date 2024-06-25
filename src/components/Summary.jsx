import Buttons from "./Buttons";

const Summary = ({ step, setStep, yearly, plans, addons, plan, included }) => {
  let hasAddons = false;
  let totalPrice = 0;

  totalPrice += yearly ? plans[plan].yearly : plans[plan].monthly;

  included.forEach((addon, index) => {
    if (addon) {
      hasAddons = true;
      totalPrice += yearly ? addons[index].yearly : addons[index].monthly;
    }
  });

  const handleSubmit = e => {
    e.preventDefault();

    setStep(step + 1);
  };

  return (
    <div
      className={step < 4 ? "form summary next" : step > 4 ? "form summary prev" : "form summary"}
    >
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <h1>Finishing up</h1>
          <p> Double-check everything looks OK before confirming.</p>
          <div className="user-container">
            <div className="plan">
              <div className="left">
                <span className="plan-name">
                  {plans[plan].name + (yearly ? " (Yearly)" : " (Monthly)")}
                </span>
                <span className="change-link" onClick={() => setStep(2)}>
                  Change
                </span>
              </div>
              <div className="rate">
                {yearly ? `+$${plans[plan].yearly}/yr` : `+$${plans[plan].monthly}/mo`}
              </div>
            </div>
            {hasAddons && <hr />}
            {included.map((addon, index) => {
              if (addon) {
                return (
                  <div key={index} className="addon">
                    <div className="name">{addons[index].name}</div>
                    <div className="rate">
                      {yearly ? `+$${addons[index].yearly}/yr` : `+$${addons[index].monthly}/mo`}
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="total">
            <span className="name">{yearly ? "Total (per year)" : "Total (per month)"}</span>
            <span className="total-price">
              {yearly ? `$${totalPrice}/yr` : `$${totalPrice}/mo`}
            </span>
          </div>
        </div>
        <Buttons step={4} setStep={setStep} />
      </form>
    </div>
  );
};

export default Summary;
