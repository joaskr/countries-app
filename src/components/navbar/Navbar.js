import React from 'react';
import ModeToggler from '../modeToggler/ModeToggler';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar light-theme">
      <Link to={`/`}>
        <h1>Where in the world?</h1>
      </Link>
      <ModeToggler />
    </nav>
  );
}

export default Navbar;
