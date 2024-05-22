import axios from 'axios';

export type Suit = 'HEARTS' | 'DIAMONDS' | 'CLUBS' | 'SPADES';
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

export interface Card {
  suit: Suit;
  rank: Rank;
  image: string;
}

export const fetchDeck = async (): Promise<Card[]> => {
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=52');
    const cards = response.data.cards.map((card: { suit: Suit; value: Rank; image: string }) => ({
        suit: card.suit,
        rank: card.value,
        image: card.image,
    }));
    return cards;
};
