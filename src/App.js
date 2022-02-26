import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <h1>Yodlr Design Challenge</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
