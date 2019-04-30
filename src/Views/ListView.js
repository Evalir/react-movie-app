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

//Custom hook that gets API data.
function useMovies() {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log('Sup');
    setData({ movies: [] });
  }, []);

  return data;
}

export default function ListView() {
  const data = useMovies();
  return (
    <AppWrapper>
      <CenteringWrapper>
        <AppTitle>
          Movies{' '}
          <span role="img" aria-label="emoji">
            🍿
          </span>
        </AppTitle>
        <Card>
          <Emoji>
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </Emoji>
          <div>
            <CardTitle>The Heart Collector</CardTitle>
            <CardText>Nevermore!</CardText>
          </div>
        </Card>
        <Card>
          <Emoji>
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </Emoji>
          <div>
            <CardTitle>The Heart Collector</CardTitle>
            <CardText>Nevermore!</CardText>
          </div>
        </Card>
        <Card>
          <Emoji>
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </Emoji>
          <div>
            <CardTitle>The Heart Collector</CardTitle>
            <CardText>Nevermore!</CardText>
          </div>
        </Card>
        <Card>
          <Emoji>
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </Emoji>
          <div>
            <CardTitle>The Heart Collector</CardTitle>
            <CardText>Nevermore!</CardText>
          </div>
        </Card>
      </CenteringWrapper>
    </AppWrapper>
  );
}
