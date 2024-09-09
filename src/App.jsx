import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";
import Product from "./Components/Product/Product.jsx";
import Collections from "./Components/Collections/Collections.jsx";
import Construction from "./Components/Construction/Construction.jsx";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="mainContent">
          <Routes>
            {/* Welcome Screen Route */}
            <Route path="/" element={<Welcome />} />

            {/* Prsvr Kicks Page */}
            <Route path="/product" element={<Product />} />

            {/* Collections Page */}
            <Route path="/collections" element={<Collections />} />

            {/* All other links go to the Under Construction page */}
            <Route path="*" element={<Construction />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
// Done

export default App;
