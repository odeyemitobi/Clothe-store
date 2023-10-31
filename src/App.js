import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/main/Home";
import Products from "./Pages/sub/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products" element={<Products/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
