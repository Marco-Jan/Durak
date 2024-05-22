import React, { useEffect, useState } from 'react';
import Hand from './Hand';
import Table from './Table';
import Deck from './Deck';
import { Card, fetchDeck } from '../deck';

interface GameProps {
  playerName: string;
  onGameEnd: (winnerName: string) => void;
}

const Game: React.FC<GameProps> = ({ playerName, onGameEnd }) => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [computerHand, setComputerHand] = useState<Card[]>([]);
  const [tableCards, setTableCards] = useState<Card[]>([]);
  const [trumpCard, setTrumpCard] = useState<Card | null>(null);
  const [attacker, setAttacker] = useState<'player' | 'computer'>('player');

  useEffect(() => {
    const loadDeck = async () => {
      const deck = await fetchDeck();
      setDeck(deck.slice(12));
      setTrumpCard(deck[deck.length - 1]); 
      setPlayerHand(deck.slice(0, 6));
      setComputerHand(deck.slice(6, 12));
    };
    loadDeck();
  }, []);

  const playCard = (card: Card) => {
    if (attacker === 'player') {
      setTableCards([...tableCards, card]);
      setPlayerHand(playerHand.filter(c => c !== card));
      setAttacker('computer');
    } else {
      setTableCards([...tableCards, card]);
      setComputerHand(computerHand.filter(c => c !== card));
      setAttacker('player');
    }

    // Überprüfe, ob das Spiel vorbei ist
    if (playerHand.length === 1 || computerHand.length === 1) {
      const winner = playerHand.length === 1 ? 'computer' : playerName;
      onGameEnd(winner);
    }
  };

  const computerMove = () => {
    const card = computerHand[0]; 
    playCard(card);
  };

  if (attacker === 'computer') {
    setTimeout(computerMove, 1000); // Simuliert eine kurze Verzögerung für den Zug des Computers
  }

  return (
    <div>
      <h2>Spieler: {playerName}</h2>
      <Hand cards={playerHand} onCardClick={playCard} />
      <Table cards={tableCards} />
      <Deck trumpCard={trumpCard} deckSize={deck.length} />
      <Hand cards={computerHand} hidden />
    </div>
  );
};

export default Game;
