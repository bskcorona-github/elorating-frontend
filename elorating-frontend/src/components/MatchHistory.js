import React from 'react';

function MatchHistory() {
  const matches = [
    { id: 1, date: '2023-08-01', result: 'Team A wins' },
    { id: 2, date: '2023-08-05', result: 'Team B wins' },
    { id: 3, date: '2023-08-10', result: 'Draw' },
    // ... 他の試合情報
  ];

  return (
    <div>
      <h2>Match History</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            <strong>Date:</strong> {match.date} - <strong>Result:</strong> {match.result}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchHistory;
