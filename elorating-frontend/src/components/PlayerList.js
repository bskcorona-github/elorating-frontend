import React from 'react';

function PlayerList({ players }) {
  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - Elo Rating: {player.eloRating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
