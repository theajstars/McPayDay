import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import App from "./App";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

ReactDOM.render(
  <ToastProvider>
    <Router>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<App />} />
      </Routes>
    </Router>
  </ToastProvider>,
  document.getElementById("root")
);
