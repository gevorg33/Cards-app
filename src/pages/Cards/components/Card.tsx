import React from 'react';
import { CardProps } from '../types';

const Card: React.FC<CardProps> = ({ id, number, onDelete }) => {
  return (
    <div className='bg-gray-200 rounded-lg p-4 text-center relative'>
      <button
        className='absolute top-0 right-0 text-gray-400 hover:text-gray-500 focus:outline-none'
        onClick={() => onDelete(id)}
      >
        <svg
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
      <p className='text-lg font-bold'>{number}</p>
    </div>
  );
};

export default React.memo(Card);
