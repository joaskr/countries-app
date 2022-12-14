import React, { useState, useEffect } from 'react';
import './Countries.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';
import { getCountries } from '../../middleware/index';

function Countries() {
  const [countries, setCountries] = useState(false);
  useEffect(() => {
    getCountries()
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="countries-wrapper">
      <header className="countries-header">
        <div className="input-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            className="input-field"
            type="text"
            placeholder="Search for a country..."
            name="country"
          />
        </div>
        <div className="select-container">
          <select className="select-field">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </header>
      <main className="countries-content">
        {countries === false ? (
          <Spinner />
        ) : (
          countries.map((country, id) => {
            return (
              <Card
                key={id}
                image={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                cca2={country.cca2}
              />
            );
          })
        )}
      </main>
    </div>
  );
}

export default Countries;
