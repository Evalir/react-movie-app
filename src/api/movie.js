import axios from 'axios';

const KEY = 'c07e8564a10cb2ef9d0c0a5645074d25';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
  },
});
