import styled from '@emotion/styled';

export const AppWrapper = styled('div')`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #161719;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-areas: 'title ', 'content';
`;

export const CenteringWrapper = styled('div')`
  width: 80vw;
  margin: 0 auto;
`;

export const AppTitle = styled('h1')`
  margin: 2rem 0;
  color: white;
  font-family: Helvetica, sans-serif;
`;

export const Card = styled('div')`
  position: relative;
  margin-bottom: 2rem;
  min-height: 100px;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-areas: 'emoji content';
  border: 2px solid white;
  border-radius: 1rem;
  background-color: #1f2229;
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

export const CardTitle = styled('h2')`
  grid-area: content;
  font-family: Helvetica;
  color: white;
`;

export const CardText = styled('p')`
  font-size: 1rem;
  grid-area: content;
  font-family: Helvetica;
  color: #f5f5f5;
`;
