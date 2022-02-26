import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ModuleResolutionKind } from "typescript";
import Home from "./Home"
import Admin from "./Admin"
// import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Yodlr Design Chaenge</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;