
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/style.css"

//components

//pages
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";




function App() {
  return (
      <Router>
         
          <main className="container-md">
              <Route exact path="/" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
          </main>
          
      </Router>
  );
}

export default App;