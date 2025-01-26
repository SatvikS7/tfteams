import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PlayerProfile from './components/PlayerProfile';
import { fetchSummonerData, fetchRankedStats } from './api/riotApi';

interface ProfileData {
  name: string;
  rank: string;
  wins: number;
  losses: number;
}

const App: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const handleSearch = async (summonerName: string, tagLine:string) => {
    try {
      // Fetch summoner data
      const summoner = await fetchSummonerData(summonerName, tagLine);

      setProfileData({
        name: summoner.gameName,
        rank: `${summoner.rankDetails.tier} ${summoner.rankDetails.rank}`,
        wins: summoner.rankDetails.wins,
        losses: summoner.rankDetails.losses,
      });
    } catch (error) {
      alert('Error fetching player data. Please try again.');
    }
  };

  return (
    <div>
      <h1>TFT Profile Viewer</h1>
      <SearchBar onSearch={handleSearch} />
      <PlayerProfile profileData={profileData} />
    </div>
  );
};

export default App;
