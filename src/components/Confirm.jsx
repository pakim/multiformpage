import icon from "../assets/images/icon-thank-you.svg";

const Confirm = ({ step }) => {
  return (
    <div className={step < 5 ? "form confirm next" : "form confirm"}>
      <form>
        <img src={icon} alt="confirm icon" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </form>
    </div>
  );
};

export default Confirm;
