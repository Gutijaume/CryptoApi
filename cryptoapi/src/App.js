import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "wouter";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Sign from "./pages/Sign-in/Sign";

function App() {
  return (
    <div>
      <Router>
        <Navbar />        
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/sign" component={Sign} />
      </Router>
    </div>
  );
}

export default App;