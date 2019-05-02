import React, { useState, useEffect } from 'react';
import {
  AppWrapper,
  CenteringWrapper,
  AppTitle,
  Card,
  CardTitle,
  CardText,
  Emoji,
} from '../styles/Styled';

import axios from '../api/movie';

//Custom hook that gets API data.
function useDiscover() {
  const [data, setData] = useState(undefined);
  async function fetchData() {
    try {
      const res = await axios.get(`/discover/movie`);
      setData({ movies: res.data.results });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return data;
}

export default function ListView() {
  const data = useDiscover();

  function renderList() {
    if (typeof data === 'undefined') {
      // console.log(data);
      return <div>Loading...</div>;
    }
    console.log(data.movies);
    return data.movies.map(movie => (
      <Card key={movie.id}>
        <Emoji>{movie.vote_average < 7.0 ? '🤢' : '🔥'}</Emoji>
        <div>
          <CardTitle to={`/movie/${movie.id}`}>{movie.title}</CardTitle>
          <CardText>Rating: {movie.vote_average}</CardText>
        </div>
      </Card>
    ));
  }

  return (
    <AppWrapper>
      <CenteringWrapper>
        <AppTitle>
          Movies{' '}
          <span role="img" aria-label="emoji">
            🍿
          </span>
        </AppTitle>
        {renderList()}
      </CenteringWrapper>
    </AppWrapper>
  );
}
