import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import custom CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/review" className="nav-link">
              Review
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
