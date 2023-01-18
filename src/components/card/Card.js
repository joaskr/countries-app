import './Card.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import DataParagraph from '../dataParagraph/DataParagraph';
import { motion } from 'framer-motion';

function Card({ image, name, population, region, capital, cca2 }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      className="card">
      <Link to={`/countries/${cca2}`} className="card-link">
        <div className="card-header">
          <img src={image} alt={'flag of ' + name} />
        </div>
        <div className="card-content">
          <h2>{name}</h2>
          <DataParagraph category="Population" info={population} />
          <DataParagraph category="Region" info={region} />
          <DataParagraph category="Capital" info={capital} />
        </div>
      </Link>
    </motion.div>
  );
}

export default Card;
