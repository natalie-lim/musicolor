import React from "react";
import { Routes, Route } from "react-router-dom";
import PickGenre from "./PickGenre";
import ColorPalette from "./ColorPalette"
import App from "./App"

function PickGenreWrapper() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pickgenre" element={<PickGenre />} />
      <Route path="/colorpalette" element={<ColorPalette />} />
    </Routes>
  );
}

export default PickGenreWrapper;
