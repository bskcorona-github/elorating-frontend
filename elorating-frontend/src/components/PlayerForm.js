import React, { useState } from 'react';

function PlayerForm({ addPlayer }) {
  const [name, setName] = useState('');
  const [eloRating, setEloRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !eloRating) return;

    const newPlayer = {
      name: name,
      eloRating: parseInt(eloRating),
    };

    addPlayer(newPlayer);
    setName('');
    setEloRating('');
  };

  return (
    <div>
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Elo Rating:</label>
          <input type="number" value={eloRating} onChange={(e) => setEloRating(e.target.value)} />
        </div>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default PlayerForm;
