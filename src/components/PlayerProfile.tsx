import React from 'react';

interface ProfileData {
  name: string;
  rank: string;
  wins: number;
  losses: number;
}

interface PlayerProfileProps {
  profileData: ProfileData | null;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ profileData }) => {
  if (!profileData) return null;

  const { name, rank, wins, losses } = profileData;

  return (
    <div className="player-profile">
      <h2>{name}</h2>
      <p>Rank: {rank}</p>
      <p>Wins: {wins}</p>
      <p>Losses: {losses}</p>
    </div>
  );
};

export default PlayerProfile;
