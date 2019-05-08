import React from 'react';

import {
  MovieTitle,
  MovieSubtitle,
  MoviePercentage,
  MovieDetails,
  MovieSmallTitle,
} from '../styles/Styled';

export default function MovieInfo({
  title,
  tagline,
  percentage,
  overview,
  genres,
}) {
  const movieLikeEmoji = percentage > 70.0 ? '👍' : '👎';
  return (
    <div>
      <MovieTitle>{title}</MovieTitle>
      <MovieSubtitle weight={300}>
        <i>{tagline}</i> -{' '}
        <MoviePercentage>
          {percentage}% {movieLikeEmoji}
        </MoviePercentage>
      </MovieSubtitle>
      <MovieSmallTitle>
        Genres: <br />
        {genres[0].name}, {genres[1].name}, {genres[2].name}
      </MovieSmallTitle>
      <MovieSmallTitle>Synopsis</MovieSmallTitle>
      <MovieDetails>{overview}</MovieDetails>
    </div>
  );
}
