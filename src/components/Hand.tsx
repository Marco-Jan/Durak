import React from 'react';
import Card from './Card';
import { Card as CardType } from '../deck';

interface HandProps {
  cards: CardType[];
  hidden?: boolean;
  onCardClick?: (card: CardType) => void;
}

const Hand: React.FC<HandProps> = ({ cards, hidden = false, onCardClick }) => {
  return (
    <div className="hand">
      {cards.map((card, index) => (
        <div key={index} onClick={() => onCardClick && onCardClick(card)}>
          <Card card={card} hidden={hidden} />
        </div>
      ))}
    </div>
  );
};

export default Hand;
