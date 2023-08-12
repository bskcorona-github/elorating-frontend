import React, { useState, useEffect } from 'react';
import PlayerList from '../components/PlayerList';
import api from '../services/api';

function PlayerPage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // プレイヤー情報を取得するAPI呼び出し
    api.getPlayers()
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching players:', error);
      });
  }, []);

  return (
    <div>
      <h1>Player List</h1>
      <PlayerList players={players} />
    </div>
  );
}

export default PlayerPage;
