import './Card.scss';

import React from 'react';
import { Link } from 'react-router-dom';

function Card({ image, name, population, region, capital }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} />
      </div>
      <div className="card-content">
        <Link to={`/countries/${name}`}>
          <h2>{name}</h2>
        </Link>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
