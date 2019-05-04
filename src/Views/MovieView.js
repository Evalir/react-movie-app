import React, { useState, useEffect } from 'react';
import axios from '../api/movie';
import { IMG_BASE_URL, POSTER_SIZES } from '../api/utils';

import {
  AppWrapper,
  CenteringWrapper,
  MovieGrid,
  MoviePoster,
  MovieTitle,
  MovieDetails,
} from '../styles/Styled';

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
  if (typeof data === 'undefined') {
    return null;
  }
  const { movies } = data;
  console.log(movies);
  const moviePosterURL =
    IMG_BASE_URL + POSTER_SIZES.small + `${movies.poster_path}`;

  return (
    <AppWrapper>
      <CenteringWrapper>
        <MovieGrid>
          <MoviePoster src={moviePosterURL} alt="klk" />
          <div>
            <MovieTitle>{movies.original_title}</MovieTitle>
            <MovieDetails>{movies.overview}</MovieDetails>
          </div>
        </MovieGrid>
      </CenteringWrapper>
    </AppWrapper>
  );
}
