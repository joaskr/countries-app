import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import './ModeToggler.scss';
import '../../index.scss';

export default function ModeToggler() {
  const [activeTheme, setActiveTheme] = useState('light');

  const changeTheme = () => {
    activeTheme === 'light' ? setActiveTheme('dark') : setActiveTheme('light');
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${activeTheme}`);
  };

  return (
    <button className="toggler-btn" onClick={changeTheme}>
      <FontAwesomeIcon icon={faMoon} className="toggler-icon" />
      <strong>Dark Mode</strong>
    </button>
  );
}
