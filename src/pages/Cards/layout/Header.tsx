import React from 'react';
import { HeaderProps } from '../types';

export const Header: React.FC<HeaderProps> = React.memo(
  ({ handleAddCard, handleSortCards }): JSX.Element => (
    <header className='flex justify-between items-center bg-gray-800 text-white p-4'>
      <div>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
          onClick={handleAddCard}
        >
          Add Card
        </button>
        <button
          className='bg-green-500 text-white px-4 py-2 rounded'
          onClick={handleSortCards}
        >
          Sort Cards
        </button>
      </div>
    </header>
  ),
);
