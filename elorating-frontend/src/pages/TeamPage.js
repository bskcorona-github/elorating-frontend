import React, { useState, useEffect } from 'react';
import TeamResult from '../components/TeamResult';
import api from '../services/api';

function TeamPage() {
  const [teamResult, setTeamResult] = useState(null);

  useEffect(() => {
    // チーム情報を取得するAPI呼び出し
    api.getTeamResult()
      .then((response) => {
        setTeamResult(response.data);
      })
      .catch((error) => {
        console.error('Error fetching team result:', error);
      });
  }, []);

  return (
    <div>
      <h1>Team Result</h1>
      {teamResult ? (
        <TeamResult teamA={teamResult.teamA} teamB={teamResult.teamB} />
      ) : (
        <p>Loading team result...</p>
      )}
    </div>
  );
}

export default TeamPage;
