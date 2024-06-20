import { useState } from "react";
import Buttons from "./Buttons";

const Info = ({ step, info, setInfo, setInfoCompleted, setStep }) => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleChange = e => {
    setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    let complete = true;

    // check name input
    if (!info.name) {
      setNameError("This field is required");
      complete = false;
    }

    // check email input
    if (!info.email) {
      setEmailError("This field is required");
      complete = false;
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailPattern.test(info.email)) {
        setEmailError("Email format is incorrect");
        complete = false;
      }
    }

    // check phone input
    if (!info.phone) {
      setPhoneError("This field is required");
      complete = false;
    } else {
      const phonePattern = /^\+\d{1,3} \d{3} \d{3} \d{4}$/;

      if (!phonePattern.test(info.phone)) {
        setPhoneError("Phone format is incorrect");
        complete = false;
      }
    }

    if (complete) {
      setInfoCompleted(true);
      setStep(step + 1);
    }
  };

  return (
    <div className={step > 1 ? "form info prev" : "form info"}>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <div className="labels">
            <label htmlFor="name">Name</label>
            {nameError && <span className="error">{nameError}</span>}
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className={nameError && "error"}
            placeholder="e.g. Stephen King"
            value={info.name}
            onChange={handleChange}
            onFocus={() => setNameError("")}
          />
          <div className="labels">
            <label htmlFor="email">Email Address</label>
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className={emailError && "error"}
            placeholder="e.g. stephenking@lorem.com"
            value={info.email}
            onChange={handleChange}
            onFocus={() => setEmailError("")}
          />
          <div className="labels">
            <label htmlFor="phone">Phone Number</label>
            {phoneError && <span className="error">{phoneError}</span>}
          </div>
          <input
            type="text"
            id="phone"
            name="phone"
            className={phoneError && "error"}
            placeholder="e.g. +1 234 567 8910"
            value={info.phone}
            onChange={handleChange}
            onFocus={() => setPhoneError("")}
          />
        </div>
        <Buttons step={1} setStep={setStep} />
      </form>
    </div>
  );
};

export default Info;
