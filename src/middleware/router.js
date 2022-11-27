import { Route, Routes } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
import Countries from '../screens/countries/Countries';
const Routing = () => {
  return (
    <Routes>
      <Route path="/countries" element={<Countries />} />
      <Route path="/countries/:id" element={<Spinner />} />
      <Route path="/" element={<Countries />} />
    </Routes>
  );
};

export default Routing;
