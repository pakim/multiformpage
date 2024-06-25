const Step = ({ number, title, step, setStep, completed }) => {
  const handleClick = () => {
    if (completed) {
      setStep(number);
    }
  };
  return (
    <div className="step" onClick={handleClick}>
      <div
        className={
          step === number || (step === 5 && number === 4) ? "step-number active" : "step-number"
        }
      >
        <span>{number}</span>
      </div>
      <div className="step-info">
        <div className="name">{"Step " + number}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default Step;
