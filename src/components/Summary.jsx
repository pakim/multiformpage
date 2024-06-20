import Buttons from "./Buttons";

const Summary = ({ step, setStep }) => {
  return (
    <div className={step < 4 ? "form summary next" : "form summary"}>
      <form noValidate>
        <div>
          <h1>Finishing up</h1>
          <p> Double-check everything looks OK before confirming.</p>
        </div>
        <Buttons step={4} setStep={setStep} />
      </form>
    </div>
  )
};

export default Summary
