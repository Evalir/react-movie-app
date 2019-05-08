import React, { useState, useEffect } from 'react';
import axios from '../api/movie';

import { IMG_BASE_URL, POSTER_SIZES } from '../api/utils';

import MovieInfo from '../components/MovieInfo';

import {
  AppWrapper,
  CenteringWrapper,
  MovieGrid,
  MoviePoster,
  MovieButton,
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

export default function MovieView(props) {
  const data = useMovieFetch(props.match.params.id);
  if (typeof data === 'undefined') {
    return null;
  }
  console.log(data.movies);
  const moviePosterURL =
    IMG_BASE_URL + POSTER_SIZES.small + `${data.movies.poster_path}`;

  return (
    <AppWrapper>
      <MovieButton to="/" hiddenOnMobile>
        <span role="img" aria-label="point left emoji">
          👈
        </span>
      </MovieButton>
      <CenteringWrapper>
        <MovieGrid>
          <MoviePoster src={moviePosterURL} alt="klk" />
          <MovieInfo
            title={data.movies.original_title}
            tagline={data.movies.tagline}
            percentage={data.movies.vote_average * 10}
            overview={data.movies.overview}
            genres={data.movies.genres}
          />
        </MovieGrid>
      </CenteringWrapper>
    </AppWrapper>
  );
}
