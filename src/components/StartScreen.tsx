import React, { useState } from 'react';

interface StartScreenProps {
  onStart: (playerName: string) => void;
  highScores: string[];
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, highScores }) => {
  const [playerName, setPlayerName] = useState('');

  const handleStart = () => {
    if (playerName.trim() !== '') {
      onStart(playerName);
    }
  };

  return (
    <div className="start-screen">
      <h1>Willkommen zu Durak</h1>
      <input
        type="text"
        placeholder="Dein Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={handleStart}>Start</button>
      <h2>Highscores</h2>
      <ul>
        {highScores.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StartScreen;
