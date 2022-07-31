import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_ITUNE_API_URL,
});
