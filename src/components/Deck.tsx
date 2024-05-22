import React from 'react';
import { Card as CardType } from '../deck';
import Card from './Card';

interface DeckProps {
  trumpCard: CardType | null;
  deckSize: number;
}

const Deck: React.FC<DeckProps> = ({ trumpCard, deckSize }) => {
  return (
    <div className="deck">
      <div className="deck-size">
        Karten im Deck: {deckSize}
      </div>
      {trumpCard && (
        <div className="trump-card">
          <Card card={trumpCard} />
        </div>
      )}
      <div className="deck-back">
        <Card card={{ suit: 'HEARTS', rank: '2', image: '/cards/back_of_card.png' }} hidden />
      </div>
    </div>
  );
};

export default Deck;
