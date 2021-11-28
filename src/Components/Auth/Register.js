import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import AuthNav from "./AuthNav";

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default function Register() {
  const { removeAllToasts, addToast } = useToasts();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [pinConfirm, setPinConfirm] = useState("");

  const [pinShow, setShowPin] = useState(true);
  const [pinConfirmShow, setShowConfirmPin] = useState(true);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  useEffect(() => {
    document.title = "Create an Account | McPayDay";
  }, []);
  useEffect(() => {
    console.clear();

    const isEmailValid = validateEmail(email);
    if (
      isEmailValid &&
      pin === pinConfirm &&
      pin.toString().length === 8 &&
      name.length > 5
    ) {
      //Form is valid so enable submit button
      setSubmitDisabled(false);
      console.log("Form valid!");
    } else {
      //Form is not valid so ensure submit button is disabled!
      setSubmitDisabled(true);
      console.log("Form ain't valid!");
    }
  }, [name, email, pin, pinConfirm]);
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

  const registerUser = () => {
    removeAllToasts();
    addToast("Form successfully validated!", {
      autoDismiss: true,
      appearance: "success",
    });
  };
  return (
    <>
      <AuthNav link="login" />
      <div className="auth-container register-container">
        <div className="auth-form flex-column">
          <span className="auth-head jost text-darker">Create an Account</span>
          <input
            type="text"
            placeholder="Email"
            className="auth-input jost"
            spellCheck="false"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            className="auth-input jost"
            spellCheck="false"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="auth-row flex-row">
            <input
              type={`${pinShow ? "text" : "password"}`}
              placeholder="Pin"
              className="auth-input jost"
              maxLength={8}
              spellCheck="false"
              value={pin}
              onChange={(e) => {
                setShowPin(true);
                setTimeout(() => {
                  setShowPin(false);
                }, 400);
                checkIsNumber(e, setPin);
              }}
            />
            <input
              type={`${pinConfirmShow ? "text" : "password"}`}
              placeholder="Confirm Pin"
              className="auth-input jost"
              maxLength={8}
              spellCheck="false"
              value={pinConfirm}
              onChange={(e) => {
                setShowConfirmPin(true);
                setTimeout(() => {
                  setShowConfirmPin(false);
                }, 400);
                checkIsNumber(e, setPinConfirm);
              }}
            />
          </div>
          <button
            className="bg-darker text-white auth-btn jost"
            disabled={isSubmitDisabled}
            onClick={registerUser}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export { validateEmail };
