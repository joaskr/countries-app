import axios from 'axios';

export const getCountries = () => {
  return axios.get('/all?fields=flags,name,population,region,capital,cca2');
};

export const getCountriesbyName = (name) => {
  return axios.get(`/name/${name}?fields=flags,name,population,region,capital,cca2`);
};

export const getCountryByRegion = (region) => {
  return axios.get(`/region/${region}`);
};

export const getCountryByCode = (code) => {
  return axios.get(
    `/alpha/${code}?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders,cca2`
  );
};

export const getCountriesByCode = (codes) => {
  return axios.get(`/alpha?codes=${codes}`);
};
