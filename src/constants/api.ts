import axios from 'axios';

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_ITUNE_API_URL,
});

export default baseApi;
