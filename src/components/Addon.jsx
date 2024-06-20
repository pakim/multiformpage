import Buttons from "./Buttons";

const Addon = ({ step, setStep }) => {
  return (
    <div className={step > 3 ? "form addon prev" : step < 3 ? "form addon next" : "form addon"}>
      <form noValidate>
        <div>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <Buttons step={3} setStep={setStep} />
      </form>
    </div>
  )
};

export default Addon
