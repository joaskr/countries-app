import axios from 'axios';

export const getCountries = () => {
  return axios.get('/all?fields=flags,name,population,region,capital');
};

export const getCountryByName = (name) => {
  return axios.get(
    `/name/${name}?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders`
  );
};

export const getCountryByRegion = (region) => {
  return axios.get(`/region/${region}`);
};

export const getCountryByCode = (codes) => {
  return axios.get(`/alpha?codes=${codes}`);
};
