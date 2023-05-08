import React from 'react';
import { LoadingScreen } from './LoadingIndicator';

export const LoadingPage: React.FC = (): JSX.Element => {
  return (
    <div className='h-screen hidden md:flex flex-col'>
      <LoadingScreen />
    </div>
  );
};
