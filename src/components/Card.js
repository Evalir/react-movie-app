import React from 'react';
import { Card, Emoji, CardTitle, CardText } from '../styles/Styled';

export default function CardComponent({ movie }) {
  return (
    <Card key={movie.id}>
      <Emoji>{movie.vote_average < 7.0 ? '🤢' : '🔥'}</Emoji>
      <div>
        <CardTitle to={`/movie/${movie.id}`}>{movie.title}</CardTitle>
        <CardText>Rating: {movie.vote_average}</CardText>
      </div>
    </Card>
  );
}
