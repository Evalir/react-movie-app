import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListView from './ListView';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={ListView} />
      </BrowserRouter>
    </>
  );
}
