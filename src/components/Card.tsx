import React from 'react';
import { Card as CardType } from '../deck';

interface CardProps {
  card: CardType;
  hidden?: boolean;
}

const Card: React.FC<CardProps> = ({ card, hidden = false }) => {
  return (
    <div className="card">
      {hidden ? '🂠' : <img src={card.image} alt={`${card.rank} of ${card.suit}`} />}
    </div>
  );
};

export default Card;
