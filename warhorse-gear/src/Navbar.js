import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">MyBusiness</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
