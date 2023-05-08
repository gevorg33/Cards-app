import React, { useCallback, useState } from 'react';
import { filterCardsById, generateNewCard, sortCards } from './utils';
import { ICard } from './types';
import { CARD_KEY } from '../../common/constants';
import { Header } from './layout/Header';
import Main from './layout/Main';
import { Footer } from './layout/Footer';

export const CardsContainer: React.FC = (): JSX.Element => {
  const setCardsAndLocalStorage = (newCards: ICard[]) => {
    setCards(newCards);
    localStorage.setItem(CARD_KEY, JSON.stringify(newCards));
  };

  const [cards, setCards] = useState<ICard[]>(() => {
    const cardsFromLocalStorage = localStorage.getItem(CARD_KEY);
    if (cardsFromLocalStorage) {
      return JSON.parse(cardsFromLocalStorage);
    }
    return [];
  });

  const handleAddCard = useCallback((): void => {
    const newCard = generateNewCard();
    setCardsAndLocalStorage([...cards, newCard]);
  }, [cards]);

  const handleDeleteCard = useCallback(
    (id: string): void => {
      const filteredCards = filterCardsById(cards, id);
      setCardsAndLocalStorage(filteredCards);
    },
    [cards],
  );

  const handleSortCards = useCallback((): void => {
    const sortedCards = sortCards(cards);
    setCardsAndLocalStorage(sortedCards);
  }, [cards]);

  return (
    <div className='flex flex-col h-screen'>
      <Header handleAddCard={handleAddCard} handleSortCards={handleSortCards} />
      <Main cards={cards} handleDeleteCard={handleDeleteCard} />
      <Footer />
    </div>
  );
};

export default React.memo(CardsContainer);
