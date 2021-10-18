// Import React
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Import Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// 
function App() {
  return (
  <> 
    <Header />
      <Router>
        <Switch>

          {/* Default Route loading the page on the About Me section */}
          <Route path="/">
            <Navigation />
          </Route>

        </Switch>
      </Router>
    <Footer />
  </>
  )
};

export default App;
