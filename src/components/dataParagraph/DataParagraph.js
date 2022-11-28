import React from 'react';

function DataParagraph({ category, info }) {
  return (
    <p>
      <strong>{category}: </strong>
      {info}
    </p>
  );
}

export default DataParagraph;
