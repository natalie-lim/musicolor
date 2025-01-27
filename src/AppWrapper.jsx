import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import PickPlaylist from "./PickGenre";
import PickGenreWrapper from "./PickGenreWrapper";
import ColorPalette from "./ColorPalette";

//
function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pickplaylist" element={<PickPlaylist />} />
      <Route path="/pickgenre" element={<PickGenreWrapper/>} />
      <Route path="/colorpalette" element={<ColorPalette/>} />
    </Routes>
  );
}

export default AppWrapper;
