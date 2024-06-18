import { useState } from "react";
import Buttons from "./Buttons";

const Info = ({ step, info, setInfo }) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleChange = e => {
    setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={step > 1 ? "form info prev" : "form info"}>
      <form action="">
        <div>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <div className="labels">
            <label htmlFor="name">Name</label>
            {nameError && <span className="error">This field is required</span>}
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value={info.name}
            onChange={handleChange}
          />
          <div className="labels">
            <label htmlFor="email">Email Address</label>
            {emailError && <span className="error">This field is required</span>}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={info.email}
            onChange={handleChange}
          />
          <div className="labels">
            <label htmlFor="phone">Phone Number</label>
            {phoneError && <span className="error">This field is required</span>}
          </div>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={info.phone}
            onChange={handleChange}
          />
        </div>
        <Buttons step={2} />
      </form>
    </div>
  );
};

export default Info;
