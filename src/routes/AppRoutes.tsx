import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Retry } from './Retry';
import { LoadingPage } from '../components/LoadingIndicator';

const Cards = React.lazy(() => Retry(() => import('../pages/Cards')));

export const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={
            <Suspense fallback={<LoadingPage />}>
              <Cards />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
