import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route } from "wouter";

import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home />
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
