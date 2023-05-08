import React from 'react';

const Instructions: React.FC = (): JSX.Element => {
  return (
    <div className='bg-white p-4 rounded shadow'>
      <h2 className='text-lg font-bold mb-2'>Instructions</h2>
      <p className='text-gray-700'>
        Click "Add Card" to add a new card with a randomly generated and unique
        number. You can add as many cards as you like.
      </p>
      <p className='text-gray-700 mt-2'>
        Click "Sort Cards" to sort all of the cards by their numbers, from
        lowest to highest.
      </p>
      <p className='text-gray-700 mt-2'>
        To delete a card, click the "X" icon on the top right corner of the
        card.
      </p>
    </div>
  );
};

export default React.memo(Instructions);
