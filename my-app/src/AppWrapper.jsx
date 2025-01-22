import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import PalettePage from "./PalettePage";

function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/palette" element={<PalettePage />} />
    </Routes>
  );
}

export default AppWrapper;
