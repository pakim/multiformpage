const Buttons = ({ step }) => {
  return (
    <div className="button-container">
      <div className="buttons">
        {step !== 1 && <button className="back">Go Back</button>}
        {step !== 4 ? (
          <button className="next">Next Step</button>
        ) : (
          <button className="confirm">Confirm</button>
        )}
      </div>
    </div>
  );
};

export default Buttons;
