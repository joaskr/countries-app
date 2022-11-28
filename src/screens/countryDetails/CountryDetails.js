// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Button from '../../components/button/Button';
import DataParagraph from '../../components/dataParagraph/DataParagraph';

function CountryDetails() {
  return (
    <div className="country-details-wrapper">
      <div className="country-details-header">
        <Button navButton={true} text="Back" url="/countries" />
      </div>
      <div className="country-details-content">
        <div className="country-details-flag">
          <img src="https://flagcdn.com/w320/mr.png"></img>
        </div>
        <div className="country-details-data">
          <h1>Belgium</h1>
          <div className="country-details-data-column">
            <DataParagraph category="Population" info="Population" />
            <DataParagraph category="Region" info="Region" />
            <DataParagraph category="Capital" info="Capital" />
            <DataParagraph category="Region" info="Region" />
            <DataParagraph category="Capital" info="Capital" />
          </div>
          <div className="country-details-data-column">
            <DataParagraph category="Population" info="Population" />
            <DataParagraph category="Region" info="Region" />
            <DataParagraph category="Region" info="Region" />
          </div>
          <div className="country-details-others">
            <strong>Border Countries:</strong>
            <Button navButton={false} text="Country1" url="/countries" />
            <Button navButton={false} text="Country2" url="/countries" />
            <Button navButton={false} text="Country3" url="/countries" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
