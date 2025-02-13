import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PlayerProfile from './components/PlayerProfile';
import PlayerIcon from './components/PlayerIcon';
import { fetchSummonerData} from './api/riotApi';
import { Icon } from '@mui/material';

interface ProfileData {
  rank: string;
  wins: number;
  losses: number;
}

const getRankBorderUrl = (tier: string): string => {
  var borderURL = '';
  const rank = tier.trim().split(/\s+/)[0];
  if(rank === 'IRON') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/01_iron/01_iron_base.png`;
  } else if(rank === 'BRONZE') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/02_bronze/02_bronze_base.png`;
  } else if(rank === 'SILVER') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/03_silver/03_silver_base.png`;
  } else if(rank === 'GOLD') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/04_gold/04_gold_base.png`;
  } else if(rank === 'PLATINUM') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/05_platinum/05_platinum_base_new.png`;
  } else if(rank === 'EMERALD') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/emerald/emerald_base.png`;
  } else if(rank === 'DIAMOND') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/06_diamond/06_diamond_base.png`;
  } else if(rank === 'MASTER') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/07_master/07_master_base.png`;
  } else if(rank === 'GRANDMASTER') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/08_grandmaster/08_grandmaster_base.png`;
  } else if(rank === 'CHALLENGER') {
    borderURL = `https://raw.communitydragon.org/latest/game/assets/loadouts/regalia/crests/ranked/09_challenger/09_challenger_base.png`;
  }
    return borderURL;
};


const App: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [profileIconId, setProfileIconId] = useState<number | null>(null);
  const [profileName, setProfileName] = useState<string | null>(null);
  const borderURL = getRankBorderUrl(profileData?.rank || '');

  const handleSearch = async (summonerName: string, tagLine:string) => {
    try {
      // Fetch summoner data
      const summoner = await fetchSummonerData(summonerName, tagLine);
      setProfileData({
        rank: `${summoner.rankDetails.tier} ${summoner.rankDetails.rank}`,
        wins: summoner.rankDetails.wins,
        losses: summoner.rankDetails.losses,
      });

      setProfileIconId(summoner.profileIconId); // Set the profile icon ID
      setProfileName(summoner.gameName); // Set the profile name

    } catch (error) {
      alert('Error fetching player data. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">TFTeams</h1>
      <SearchBar onSearch={handleSearch} />
      {profileData && (
        <div className="player-profile">
          <div className="player-info">
            <div className="ranked-icon-container">
              <PlayerIcon profileIconId={profileIconId} />
              <img src={borderURL} alt="Rank Border" className="rank-border" />
            </div>
            <h2 className="player-name">{profileName}</h2>
          </div>
          <PlayerProfile profileData={profileData} />
        </div>
      )}
    </div>
  );
};

export default App;
