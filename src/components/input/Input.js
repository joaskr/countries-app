import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import debounce from 'lodash.debounce';
import './Input.scss';

function Input({ onChangeFunc, searchTerm }) {
  const debouncedEventHandler = useMemo(() => debounce(onChangeFunc, 300), [searchTerm]);

  return (
    <div className="input-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input
        className="input-field"
        type="text"
        placeholder="Search for a country..."
        name="country"
        onChange={debouncedEventHandler}
      />
    </div>
  );
}

export default Input;
