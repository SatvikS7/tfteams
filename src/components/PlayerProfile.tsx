import React from 'react';

interface ProfileData {
  rank: string;
  wins: number;
  losses: number;
}

interface PlayerProfileProps {
  profileData: ProfileData | null;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ profileData }) => {
  if (!profileData) return null;

  const { rank, wins, losses } = profileData;
  
  return (
    <div className="player-stats-container">
      <div className="player-stat">
        <span className="stat-label">Rank:</span>
        <span className="stat-value">{rank}</span>
      </div>
      <div className="player-stat">
        <span className="stat-label">Wins:</span>
        <span className="stat-value">{wins}</span>
      </div>
      <div className="player-stat">
        <span className="stat-label">Losses:</span>
        <span className="stat-value">{losses}</span>
      </div>
    </div>
  );
};

export default PlayerProfile;
