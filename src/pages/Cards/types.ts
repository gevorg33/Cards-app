export interface CardProps {
  id: string;
  number: number;
  onDelete: (id: string) => void;
}

export interface ICard {
  id: string;
  number: number;
}

export interface HeaderProps {
  handleAddCard: () => void;
  handleSortCards: () => void;
}

export interface MainProps {
  cards: ICard[];
  handleDeleteCard: (id: string) => void;
}
