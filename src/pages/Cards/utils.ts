import { ICard } from './types';
import { v4 as uuid } from 'uuid';

export function sortCards(cards: ICard[]): ICard[] {
  return [...cards].sort((a, b) => a.number - b.number);
}

export function generateNewCard(): ICard {
  const id = uuid();
  const number = Math.floor(Math.random() * 1000) + 1;
  return { id, number };
}

export function filterCardsById(cards: ICard[], id: string): ICard[] {
  return cards.filter((card) => card.id !== id);
}
