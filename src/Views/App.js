import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const ListView = lazy(() => import('./ListView'));
const MovieView = lazy(() => import('./MovieView'));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Route exact path="/" component={ListView} />
          <Route exact path="/movie/:id" component={MovieView} />
        </BrowserRouter>
      </Suspense>
    </>
  );
}
