import React, { useState, useEffect } from 'react';
import axios from '../api/movie';
import { BASE_URL } from '../api/movie';

function useMovieFetch(id) {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/movie/${id}`);
        setData({ movies: res.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [id]);
  return data;
}

export default function App(props) {
  const data = useMovieFetch(props.match.params.id);
  console.log(data);
  if (typeof data === 'undefined') {
    return null;
  }
  const moviePosterURL = BASE_URL + `/movie/${props.match.params.id}`;
  console.log('url: ', moviePosterURL);

  return <div>Movie id: {props.match.params.id}</div>;
}
