import React from 'react';
import './SelectInput.scss';

function SelectInput({ onChangeFunc }) {
  return (
    <div className="select-container">
      <select className="select-field" onChange={onChangeFunc}>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default SelectInput;
