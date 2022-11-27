import axios from 'axios';

const useAxios = () => {
  axios.defaults.baseURL = 'https://restcountries.com/v3.1';
};

export { useAxios };
