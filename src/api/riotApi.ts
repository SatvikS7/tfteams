import axios from 'axios';

const RIOT_API_KEY = import.meta.env.VITE_RIOT_API_KEY;
const BASE_URL = 'https://americas.api.riotgames.com/riot'; // Replace <region> with your chosen region (e.g., na1, euw1, etc.)

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

export const fetchSummonerData = async (summonerName: string, tagLine: string) => {
  try {
    const response = await fetch(`http://localhost:5000/api/summoner/${summonerName}/${tagLine}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch summoner data:', error);
    throw error;
  }
};

export const fetchRankedStats = async (puuid: string): Promise<RankedStats[]> => {
  try { 
    const response = await fetch(`http://localhost:5000/api/summoner/${puuid}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching ranked stats:', error);
    throw error;
  }
};
