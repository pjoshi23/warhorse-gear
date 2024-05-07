import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PrivacyPolicy from './PP';
import AboutUs from './About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
