import React, { useState, useEffect } from 'react';
import MatchHistory from '../components/MatchHistory';
import api from '../services/api';

function HistoryPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // マッチ履歴を取得するAPI呼び出し
    api.getMatchHistory()
      .then((response) => {
        setMatches(response.data);
      })
      .catch((error) => {
        console.error('Error fetching match history:', error);
      });
  }, []);

  return (
    <div>
      <h1>Match History</h1>
      <MatchHistory matches={matches} />
    </div>
  );
}

export default HistoryPage;
