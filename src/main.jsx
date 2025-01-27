import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import { RecoilRoot } from "recoil";
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <AppWrapper />
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
