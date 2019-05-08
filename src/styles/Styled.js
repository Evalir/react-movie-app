import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Link } from 'react-router-dom';

export const AppWrapper = styled.div`
  background-color: #00010e;
  color: white;
  font-family: Helvetica;
  padding: 2em 0 1em 0;
  min-width: 100vw;
`;

export const CenteringWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const TransformLeft = keyframes`
  from 0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
`;

const TransformRight = keyframes`
  from 0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`;

export const AppTitle = styled.h1`
  color: white;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  margin-bottom: 1rem;
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
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
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

/*
  MOVIE VIEW COMPONENT
*/

const HoverBackAnimation = keyframes`
  from 0%, 100% {
    background-color: transparent;
  }
  50% {
    background-color: #1B1E2D;
  }
`;

export const MovieButton = styled(Link)`
  display: flex;
  justify-items: center;
  align-items: center;
  float: left;
  height: 100vh;
  font-size: 4em;
  padding: 1rem;
  text-decoration: none;
  &:hover {
    animation: ${HoverBackAnimation} 1s ease;
    span {
      animation: ${props => (props.left ? TransformLeft : TransformRight)} 1s
        ease;
    }
  }
  @media only screen and (max-width: 768px) {
    display: ${props => (props.hiddenOnMobile ? 'none' : 'flex')};
  }
`;

export const MoviePoster = styled.img`
  grid-area: movie-poster;
  max-width: 100%;
  align-self: center;
  justify-self: center;
  background-color: red;
  border-radius: 12px;
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
  font-weight: 300;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const MovieDetails = styled.p`
  @media only screen and (min-width: 768px) {
    grid-area: content;
  }
  font-family: 'Source Sans Pro';
  margin-bottom: 1em;
`;

export const MovieSubtitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: ${props => `${props.weight}`};
  /* color: gray; */
  margin: 0 0 1em 0;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const MovieSmallTitle = styled.h3`
  font-size: 1rem;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: ${props => (props.bolder ? '800' : '700')};
  /* color: gray; */
  margin: 0 0 1em 0;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const MoviePercentage = styled.p`
  display: inline;
  font-size: 1.5rem;
  font-family: 'Source Sans Pro';
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
