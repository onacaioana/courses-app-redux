import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App.js";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
