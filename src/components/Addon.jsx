import Buttons from "./Buttons";

const Addon = ({ step, setStep, yearly, addons, included, setIncluded }) => {
  const handleSubmit = e => {
    e.preventDefault();

    setStep(step + 1);
  };

  return (
    <div className={step > 3 ? "form addon prev" : step < 3 ? "form addon next" : "form addon"}>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <div className="addons">
            <label className={included[0] ? "addon-container selected" : "addon-container"}>
              <div className="left">
                <input
                  type="checkbox"
                  checked={included[0]}
                  onChange={e => setIncluded(prev => [e.target.checked, prev[1], prev[2]])}
                />
                <div className="info">
                  <span className="name">{addons[0].name}</span>
                  <span className="desc">{addons[0].desc}</span>
                </div>
              </div>
              <span className="price">
                {yearly ? `+$${addons[0].yearly}/yr` : `+$${addons[0].monthly}/mo`}
              </span>
            </label>
            <label className={included[1] ? "addon-container selected" : "addon-container"}>
              <div className="left">
                <input
                  type="checkbox"
                  checked={included[1]}
                  onChange={e => setIncluded(prev => [prev[0], e.target.checked, prev[2]])}
                />
                <div className="info">
                  <span className="name">{addons[1].name}</span>
                  <span className="desc">{addons[1].desc}</span>
                </div>
              </div>
              <span className="price">
                {yearly ? `+$${addons[1].yearly}/yr` : `+$${addons[1].monthly}/mo`}
              </span>
            </label>
            <label className={included[2] ? "addon-container selected" : "addon-container"}>
              <div className="left">
                <input
                  type="checkbox"
                  checked={included[2]}
                  onChange={e => setIncluded(prev => [prev[0], prev[1], e.target.checked])}
                />
                <div className="info">
                  <span className="name">{addons[2].name}</span>
                  <span className="desc">{addons[2].desc}</span>
                </div>
              </div>
              <span className="price">
                {yearly ? `+$${addons[2].yearly}/yr` : `+$${addons[2].monthly}/mo`}
              </span>
            </label>
          </div>
        </div>
        <Buttons step={3} setStep={setStep} />
      </form>
    </div>
  );
};

export default Addon;
