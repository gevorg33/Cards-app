import React from 'react';

export const Footer: React.FC = React.memo(
  (): JSX.Element => (
    <footer className='bg-gray-800 text-white p-4'>
      <p className='text-sm'>&copy; 2023 Card App</p>
    </footer>
  ),
);
