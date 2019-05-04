import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AppWrapper = styled.div`
  background-color: #00010e;
  color: white;
  font-family: Helvetica;
  padding: 1em 0 1em 0;
  min-width: 100vw;
`;

export const CenteringWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const AppTitle = styled.h1`
  color: white;
  font-family: 'Open Sans', Helvetica, sans-serif;
`;

export const Card = styled.div`
  margin-bottom: 2rem;
  min-height: 100px;
  padding: 1rem;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-areas: 'emoji content';
  border: 2px solid #1b1e2d;
  border-radius: 1rem;
  background-color: #090e1d;
`;

export const Emoji = styled.div`
  font-size: 4rem;
  justify-self: center;
  align-self: center;
  grid-area: emoji;

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const CardTitle = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Open Sans', Helvetica, sans-serif;
  color: white;
  grid-area: content;
  align-self: center;
`;

export const CardText = styled.p`
  grid-area: content;
  font-family: 'Lato', Helvetica;
  justify-self: center;
  color: #878a99;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  grid-template-areas: 'movie-poster content';
  min-height: 300px;
  width: inherit;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const MoviePoster = styled.img`
  grid-area: movie-poster;
  max-width: 100%;
  align-self: center;
  justify-self: center;
  background-color: red;
  @media only screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MovieTitle = styled.h1`
  @media (min-width: 768px) {
    grid-area: content;
  }
  margin: 0;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Open Sans', Helvetica, sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const MovieDetails = styled.p`
  @media (min-width: 768px) {
    grid-area: content;
  }
  font-family: 'Open Sans';
`;
