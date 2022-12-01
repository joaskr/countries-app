import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.scss';
import Button from '../../components/button/Button';
import DataParagraph from '../../components/dataParagraph/DataParagraph';
import { getCountryByName } from '../../middleware/index';
import Spinner from '../../components/spinner/Spinner';

function CountryDetails() {
  const { countryName } = useParams();

  const [countryData, setcountryData] = useState(false);
  useEffect(() => {
    getCountryByName(countryName)
      .then((res) => {
        setcountryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="country-details-wrapper">
      <header className="country-details-header">
        <Button navButton={true} text="Back" url="/countries" />
      </header>

      {countryData === false ? (
        <Spinner />
      ) : (
        countryData.map((country, id) => {
          return (
            <main className="country-details-content" key={id}>
              <div className="country-details-flag">
                <img src={country.flags.png}></img>
              </div>
              <section className="country-details-data">
                <h2>{country.name.common}</h2>
                <div className="country-details-data-columns">
                  <div className="country-details-data-column">
                    <DataParagraph category="Native Name" info={country.name.common} />
                    <DataParagraph category="Population" info={country.population} />
                    <DataParagraph category="Region" info={country.region} />
                    <DataParagraph category="Sub Region" info={country.subregion} />
                    <DataParagraph category="Capital" info={country.capital} />
                  </div>
                  <div className="country-details-data-column">
                    <DataParagraph category="Top Level Domain" info={country.tld[0]} />
                    <DataParagraph category="Currencies" info={country.name.common} />
                    <DataParagraph category="Languages" info={country.name.common} />
                  </div>
                </div>

                <div className="country-details-others">
                  <strong>Border Countries:</strong>
                  <Button navButton={false} text="Country1" url="/countries" />
                  <Button navButton={false} text="Country2" url="/countries" />
                  <Button navButton={false} text="Country3" url="/countries" />
                </div>
              </section>
            </main>
          );
        })
      )}
    </div>
  );
}

export default CountryDetails;
