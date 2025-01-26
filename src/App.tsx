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

      // Fetch ranked stats
      //const rankedStats = await fetchRankedStats(summoner.id);

      // Filter for TFT ranked stats
      //const tftStats = rankedStats.find((entry) => entry.queueType === 'RANKED_TFT');

      //if (tftStats) {
        setProfileData({
          name: "Game Name: " + summoner.gameName + "\n puuid: " +summoner.puuid,
          //rank: `${tftStats.tier} ${tftStats.rank}`,
          //wins: tftStats.wins,
          //losses: tftStats.losses,
          rank: 'Unranked',
          wins: 0,
          losses: 0,
        });
      //} else {
      //  alert('No TFT ranked stats found for this player.');
      //}
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
