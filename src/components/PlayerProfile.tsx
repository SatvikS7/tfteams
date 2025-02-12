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
    <div className="player-profile">
      <p className='player-stats'>Rank: {rank}</p>
      <p className='player-stats'>Wins: {wins}</p>
      <p className='player-stats'>Losses: {losses}</p>
    </div>
  );
};

export default PlayerProfile;
