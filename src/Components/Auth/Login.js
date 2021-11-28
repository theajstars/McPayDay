import React, { useEffect, useState } from "react";
import AuthNav from "./AuthNav";
import { validateEmail } from "./Register";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [pinShow, setShowPin] = useState();

  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  function checkIsNumber(e, setter) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setter(
        isNaN(parseInt(e.target.value))
          ? e.target.value
          : parseInt(e.target.value)
      );
    }
  }

  const loginUser = () => {
    console.log("User logged in!");
  };
  useEffect(() => {
    document.title = "Login | McPayDay";
  }, []);

  useEffect(() => {
    const isEmailValid = validateEmail(email);
    if (isEmailValid && !isNaN(parseInt(pin)) && pin.toString().length === 8) {
      //Form is valid so submit it
      console.log("Form valid: ", true);
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [email, pin]);
  return (
    <>
      <AuthNav link="register" />
      <div className="auth-container login-container">
        <div className="auth-form flex-column">
          <span className="auth-head jost text-darker">Login</span>
          <input
            type="text"
            className="auth-input jost"
            placeholder="Email"
            spellCheck="false"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={`${pinShow ? "text" : "password"}`}
            className="auth-input jost"
            maxLength={8}
            spellCheck="false"
            value={pin}
            placeholder="Pin"
            onChange={(e) => {
              setShowPin(true);
              setTimeout(() => {
                setShowPin(false);
              }, 400);
              checkIsNumber(e, setPin);
            }}
          />

          <button
            className="bg-darker text-white auth-btn jost"
            disabled={isSubmitDisabled}
            onClick={loginUser}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
