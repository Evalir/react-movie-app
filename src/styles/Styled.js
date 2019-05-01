import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AppWrapper = styled.div`
  background-color: #00010e;
  padding: 1rem 0 1rem;
  min-width: 100vw;
`;

export const CenteringWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const AppTitle = styled('h1')`
  color: white;
  font-family: 'Open Sans', Helvetica, sans-serif;
`;

export const Card = styled('div')`
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

export const Emoji = styled('div')`
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

export const CardText = styled('p')`
  /* font-size: 1.5rem; */
  grid-area: content;
  font-family: 'Lato', Helvetica;
  justify-self: center;
  color: #878a99;
`;
