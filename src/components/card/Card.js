import './Card.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import DataParagraph from '../dataParagraph/DataParagraph';

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
        <DataParagraph category="Population" info={population} />
        <DataParagraph category="Region" info={region} />
        <DataParagraph category="Capital" info={capital} />
      </div>
    </div>
  );
}

export default Card;
