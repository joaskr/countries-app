import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import './ModeToggler.scss';

export default function ModeToggler() {
  return (
    <button className="toggler-btn">
      <FontAwesomeIcon icon={faMoon} className="toggler-icon" />
      <strong>Dark Mode</strong>
    </button>
  );
}
