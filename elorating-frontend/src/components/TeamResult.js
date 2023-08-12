import React from 'react';

function TeamResult({ teamA, teamB }) {
  return (
    <div>
      <h2>Team Result</h2>
      <div>
        <h3>Team A</h3>
        <ul>
          {teamA.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Team B</h3>
        <ul>
          {teamB.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeamResult;
