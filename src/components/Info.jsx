import Buttons from "./Buttons";

const Info = ({ step }) => {
  return (
    <div className={step > 1 ? "form info prev" : "form info" }>
      <form action="">
        <div>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="e.g. Stephen King" />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" />
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
        </div>
        <Buttons step={2} />
      </form>
    </div>
  );
};

export default Info;
