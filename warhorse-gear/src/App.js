import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';

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
