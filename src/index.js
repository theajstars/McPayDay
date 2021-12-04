import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import App from "./App";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Dashboard from "./Components/Dashboard";
import Purchase from "./Components/Purchase";
import Transactions from "./Components/Transactions";

ReactDOM.render(
  <ToastProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/purchase" element={<Purchase />} />
        <Route exact path="/dashboard/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  </ToastProvider>,
  document.getElementById("root")
);
