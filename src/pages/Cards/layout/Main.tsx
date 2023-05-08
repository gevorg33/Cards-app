import React from 'react';
import Card from '../components/Card';
import Instructions from '../components/Instructions';
import { MainProps } from '../types';

const Main: React.FC<MainProps> = ({ cards, handleDeleteCard }) => (
  <main className='flex-1 p-4 overflow-hidden'>
    <div className='flex'>
      <div className='flex-1 overflow-y-auto pb-5 h-85'>
        <div className='grid grid-cols-2 gap-4'>
          {cards.length === 0 ? (
            <p className='text-gray-500'>
              Click "Add Card" to add cards to the container.
            </p>
          ) : (
            cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                number={card.number}
                onDelete={handleDeleteCard}
              />
            ))
          )}
        </div>
      </div>
      <div className='w-1/3 pl-4 flex items-center'>
        <Instructions />
      </div>
    </div>
  </main>
);

export default React.memo(Main, (prevProps, nextProps) => {
  return JSON.stringify(prevProps.cards) === JSON.stringify(nextProps.cards);
});
