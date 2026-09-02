import React from "react";
import ReactDOM from "react-dom";
// Bootstrap must load before index.css, or its reboot (body background, font)
// overrides our base styles — index.css is imported before App, and App is
// where the rest of the stylesheets live.
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
