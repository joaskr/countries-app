import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.scss';
import Button from '../../components/button/Button';
import DataParagraph from '../../components/dataParagraph/DataParagraph';
import { getCountryByCode, getCountriesByCode } from '../../middleware/index';
import Spinner from '../../components/spinner/Spinner';

function CountryDetails() {
  const { code } = useParams();
  const [countryData, setcountryData] = useState(false);
  const [tld, setTld] = useState('');
  const [nativeName, setNativeName] = useState('');
  const [currencies, setCurrencies] = useState('');
  const [languages, setLanguages] = useState('');
  const [codeString, setCodeString] = useState(null);
  const [borders, setBorders] = useState([]);

  const getDataFromArray = (dataArray, setFunction, joiner) => {
    setFunction(dataArray.join(joiner));
  };

  const getDataFromObject = (dataObject, getter, setFunction) => {
    Object.keys(dataObject).forEach((key) => {
      let data = [];
      let details = dataObject[key];
      if (getter) {
        let value = details[getter];
        data.push(`${key}: ${value}`);
      } else {
        data.push(details);
      }
      getDataFromArray(data, setFunction, ', ');
    });
  };

  useEffect(() => {
    getCountryByCode(code)
      .then((res) => {
        setcountryData(res.data);
        getDataFromArray(res.data.tld, setTld, ', ');
        getDataFromArray(res.data.borders, setCodeString, ',');
        getDataFromObject(res.data.name.nativeName, 'common', setNativeName);
        getDataFromObject(res.data.currencies, 'name', setCurrencies);
        getDataFromObject(res.data.languages, false, setLanguages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code]);

  useEffect(() => {
    if (codeString) {
      getCountriesByCode(codeString).then((res) => {
        let bordersArray = [];
        res.data.map((country) => {
          bordersArray.push({ name: country.name.common, cca2: country.cca2 });
        });
        setBorders(bordersArray);
      });
    } else {
      return;
    }
  }, [codeString]);

  return (
    <div className="country-details-wrapper">
      <header className="country-details-header">
        <Button navButton={true} text="Back" url="/countries" />
      </header>
      {countryData === false ? (
        <Spinner />
      ) : (
        <main className="country-details-content" key={countryData.name.common}>
          <div className="country-details-flag">
            <img src={countryData.flags.png}></img>
          </div>
          <section className="country-details-data">
            <h2>{countryData.name.common}</h2>
            <div className="country-details-data-columns">
              <div className="country-details-data-column">
                <DataParagraph category="Native Name" info={nativeName} />
                <DataParagraph category="Population" info={countryData.population} />
                <DataParagraph category="Region" info={countryData.region} />
                <DataParagraph category="Sub Region" info={countryData.subregion} />
                <DataParagraph category="Capital" info={countryData.capital} />
              </div>
              <div className="country-details-data-column">
                <DataParagraph category="Top Level Domain" info={tld} />
                <DataParagraph category="Currencies" info={currencies} />
                <DataParagraph category="Languages" info={languages} />
              </div>
            </div>

            <div className="country-details-others">
              <strong>Border Countries:</strong>
              {borders.map((border, id) => {
                return (
                  <Button
                    key={id}
                    navButton={false}
                    text={border.name}
                    url={`/countries/${border.cca2}`}
                  />
                );
              })}
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default CountryDetails;
