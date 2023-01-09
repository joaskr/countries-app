import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import './ModeToggler.scss';
import '../../index.scss';
import { useTheme } from '../../context';

export default function ModeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="toggler-btn" onClick={toggleTheme}>
      {theme === 'dark' ? (
        <>
          <FontAwesomeIcon icon={faSun} className="toggler-icon" />
          <strong>Light Mode</strong>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faMoon} className="toggler-icon" />
          <strong>Dark Mode</strong>
        </>
      )}
    </button>
  );
}
