import React, { useState, useEffect } from 'react';
import axios from '../api/movie';

import { AppWrapper, CenteringWrapper, AppTitle } from '../styles/Styled';
import Card from '../components/Card';

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
      return <div>Loading...</div>;
    }
    console.log(data.movies);
    return data.movies.map(movie => <Card movie={movie} />);
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
