import React, { useState, useEffect } from 'react';
import './Countries.scss';

import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';
import { getCountries, getCountriesbyName, getCountryByRegion } from '../../middleware/index';
import Input from '../../components/input/Input';
import SelectInput from '../../components/selectInput/SelectInput';
import { motion, AnimatePresence } from 'framer-motion';

function Countries() {
  const [countries, setCountries] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    setError(null);
    getCountries()
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const getFilteredCountries = (e) => {
    if (e.target.value === '') {
      getAllCountries();
    } else {
      setError(null);
      getCountriesbyName(e.target.value)
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  const selectEventHandler = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      getAllCountries();
    } else {
      setError(null);
      getCountryByRegion(e.target.value)
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  if (loading) {
    return (
      <div className="spinner-div">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="countries-wrapper">
        <header className="countries-header">
          <Input onChangeFunc={getFilteredCountries} searchTerm={searchTerm} />
          <SelectInput onChangeFunc={selectEventHandler} />
        </header>
        <main>
          <div className="not-found-container not-found-wrong">
            <h2 className="not-found-header">Something went wrong.</h2>
            <p>{error.message}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="countries-wrapper">
      <header className="countries-header">
        <Input onChangeFunc={getFilteredCountries} searchTerm={searchTerm} />
        <SelectInput onChangeFunc={selectEventHandler} />
      </header>
      <motion.main layout className="countries-content">
        {countries === false ? null : (
          <AnimatePresence>
            {countries.map((country, id) => {
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
            })}
          </AnimatePresence>
        )}
      </motion.main>
    </div>
  );
}

export default Countries;
