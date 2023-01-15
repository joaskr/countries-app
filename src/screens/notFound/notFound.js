import React from 'react';
import './notFound.scss';
import Button from '../../components/button/Button';

function NotFound() {
  return (
    <div className="not-found-container">
      <h2 className="not-found-header">This page does not exist</h2>
      <Button navButton={true} text="Back" url="/countries" />
    </div>
  );
}

export default NotFound;
