import React, { useState, useEffect } from 'react';
import './Countries.scss';

import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';
import { getCountries, getCountriesbyName, getCountryByRegion } from '../../middleware/index';
import Input from '../../components/input/Input';
import SelectInput from '../../components/selectInput/SelectInput';

function Countries() {
  const [countries, setCountries] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    getCountries()
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFilteredCountries = (e) => {
    if (e.target.value === '') {
      getAllCountries();
    } else {
      getCountriesbyName(e.target.value)
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const selectEventHandler = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      getAllCountries();
    } else {
      getCountryByRegion(e.target.value)
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="countries-wrapper">
      <header className="countries-header">
        <Input onChangeFunc={getFilteredCountries} searchTerm={searchTerm} />
        <SelectInput onChangeFunc={selectEventHandler} />
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
