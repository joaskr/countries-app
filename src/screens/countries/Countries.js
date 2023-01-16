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
        .catch(() => {
          setCountries([
            {
              flags: {
                png: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80'
              },
              name: { common: 'Country Not found' }
            }
          ]);
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
