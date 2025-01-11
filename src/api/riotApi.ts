import axios from 'axios';

const API_KEY = import.meta.env.VITE_RIOT_API_KEY;
const BASE_URL = 'https://na1.api.riotgames.com/tft'; // Replace <region> with your chosen region (e.g., na1, euw1, etc.)

interface SummonerData {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  summonerLevel: number;
}

interface RankedStats {
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  queueType: string;
}

export const fetchSummonerData = async (summonerName: string): Promise<SummonerData> => {
  try {
    const response = await axios.get<SummonerData>(
      `${BASE_URL}/summoner/v1/summoners/by-name/${summonerName}`,
      { headers: { 'X-Riot-Token': API_KEY } }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching summoner data:', error);
    throw error;
  }
};

export const fetchRankedStats = async (summonerId: string): Promise<RankedStats[]> => {
  try {
    const response = await axios.get<RankedStats[]>(
      `${BASE_URL}/league/v1/entries/by-summoner/${summonerId}`,
      { headers: { 'X-Riot-Token': API_KEY } }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching ranked stats:', error);
    throw error;
  }
};
