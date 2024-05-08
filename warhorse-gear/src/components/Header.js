import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <h1>My Business Website</h1>
    <nav>
      <Link to="/about-us">About Us</Link>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export const Footer = () => (
  <footer>
    <p>Copyright © 2024</p>
  </footer>
);

export default Header;