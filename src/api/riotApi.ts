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
