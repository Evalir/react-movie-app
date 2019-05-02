import axios from 'axios';

const KEY = 'c07e8564a10cb2ef9d0c0a5645074d25';
export const BASE_URL = 'https://api.themoviedb.org/3';
export default axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: KEY,
  },
});
