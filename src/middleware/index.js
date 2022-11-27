import axios from 'axios';

export const getCountries = () => {
  return axios.get('/all');
};

export const getCountryByName = (name) => {
  return axios.get(`/name/${name}`);
};

export const getCountryByRegion = (region) => {
  return axios.get(`/region/${region}`);
};
