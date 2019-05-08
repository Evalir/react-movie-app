import React from 'react';

import { MovieButton } from '../styles/Styled';

export default function MovieBackButton({ path }) {
  return (
    <MovieButton to={`${path}`} hiddenMobile left>
      <span role="img" aria-label="point left emoji">
        👈
      </span>
    </MovieButton>
  );
}
