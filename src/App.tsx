import React, { useState } from 'react';
import Game from './components/Game';
import StartScreen from './components/StartScreen';
import './styles/App.css';

const App: React.FC = () => {
  const [playerName, setPlayerName] = useState<string | null>(null);
  const [highScores, setHighScores] = useState<string[]>([]);

  const handleStart = (name: string) => {
    setPlayerName(name);
  };

  const handleGameEnd = (winnerName: string) => {
    setHighScores([...highScores, winnerName]);
    setPlayerName(null); // Reset to start screen after the game ends
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Durak Spiel</h1>
      </header>
      {playerName ? (
        <Game playerName={playerName} onGameEnd={handleGameEnd} />
      ) : (
        <StartScreen onStart={handleStart} highScores={highScores} />
      )}
    </div>
  );
};

export default App;
