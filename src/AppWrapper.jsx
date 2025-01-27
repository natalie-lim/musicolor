import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import PickPlaylist from "./PickPlaylist";

//
function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pickplaylist" element={<PickPlaylist />} />
    </Routes>
  );
}

export default AppWrapper;
