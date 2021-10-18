// Import React
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Import Components
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// 
function App() {
  return (
  <> 
    <Navbar />
      <Router>
        <Switch>
          {/* Default Route loading the page on the About Me section */}
          <Route path="/about">
            <AboutMe />
          </Route>
          {/* Portfolio Route */}
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          {/* Contact Me Route */}
          <Route path="/contact">
            <ContactMe />
          </Route>
          {/* Resume Route */}
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    <Footer />
  </>
  )
};

export default App;
