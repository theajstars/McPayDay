import React from "react";
import { Link } from "react-router-dom";

export default function AuthNav({ link }) {
  return (
    <div className="auth-nav jost">
      {link === "register" && (
        <>
          <span>Dont have an account yet?</span>
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </>
      )}
      {link === "login" && (
        <>
          <span>Already have an account?</span>
          <Link className="auth-link" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
}
