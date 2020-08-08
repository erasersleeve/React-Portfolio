
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components

//pages
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";




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