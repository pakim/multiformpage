const Buttons = ({ step, setStep }) => {
  const handleBack = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <div className="button-container">
      <div className="buttons">
        {step !== 4 ? (
          <button type="submit" className="next">
            Next Step
          </button>
        ) : (
          <button type="submit" className="confirm">
            Confirm
          </button>
        )}
        {step !== 1 && (
          <button className="back" onClick={handleBack}>
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Buttons;
