import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PlayerProfile from './components/PlayerProfile';

interface ProfileData {
  name: string;
  rank: string;
  wins: number;
  losses: number;
}

const App: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const handleSearch = async (summonerName: string) => {
    // Fetch data from RIOT API here
    const dummyData: ProfileData = {
      name: summonerName,
      rank: 'Diamond IV',
      wins: 150,
      losses: 100,
    };
    setProfileData(dummyData);
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
