import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListView from './ListView';
import MovieView from './MovieView';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={ListView} />
        <Route exact path="/movie/:id" component={MovieView} />
      </BrowserRouter>
    </>
  );
}
