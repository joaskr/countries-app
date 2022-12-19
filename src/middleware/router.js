import { Route, Routes } from 'react-router-dom';
import Countries from '../screens/countries/Countries';
import CountryDetails from '../screens/countryDetails/CountryDetails';
import NotFound from '../screens/notFound/notFound';

const Routing = () => {
  return (
    <Routes>
      <Route path="/countries" element={<Countries />} />
      <Route path="/countries/:code" element={<CountryDetails />} />
      <Route path="/" element={<Countries />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
