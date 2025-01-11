import axios from 'axios';

const API_KEY = process.env.RIOT_API_KEY as string;
const BASE_URL = 'https://<region>.api.riotgames.com/tft';

interface SummonerData {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
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
