import React from 'react';
import Card from './Card';
import { Card as CardType } from '../deck';

interface TableProps {
  cards: CardType[];
}

const Table: React.FC<TableProps> = ({ cards }) => {
  return (
    <div className="table">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

export default Table;
