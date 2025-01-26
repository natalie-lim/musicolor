import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);

reportWebVitals();