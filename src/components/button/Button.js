import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Button.scss';

function Button({ navButton, text, url }) {
  return (
    <Link to={url} className="btn-link">
      <button className={`btn ${navButton ? 'nav-btn' : ''}`}>
        {navButton ? <FontAwesomeIcon icon={faArrowLeft} className="btn-icon" /> : null}
        {text}
      </button>
    </Link>
  );
}

export default Button;
