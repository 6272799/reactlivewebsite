import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

import "./App.css";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
