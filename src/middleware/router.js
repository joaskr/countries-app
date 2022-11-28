import { Route, Routes } from 'react-router-dom';
import Countries from '../screens/countries/Countries';
import CountryDetails from '../screens/countryDetails/CountryDetails';
const Routing = () => {
  return (
    <Routes>
      <Route path="/countries" element={<Countries />} />
      <Route path="/countries/:id" element={<CountryDetails />} />
      <Route path="/" element={<Countries />} />
    </Routes>
  );
};

export default Routing;
