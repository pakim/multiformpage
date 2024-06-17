const Step = ({ number, title, step, setStep }) => {
  return (
    <div className="step" onClick={() => setStep(number)}>
      <div className={step === number ? "step-number active" : "step-number"}>
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
