import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Button({ navButton, text, url }) {
  return (
    <button>
      <Link to={url}>
        {navButton ?? <FontAwesomeIcon icon={faArrowLeft} className="button-icon" />}
        {text}
      </Link>
    </button>
  );
}

export default Button;
