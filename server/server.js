import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const RIOT_API_KEY = process.env.RIOT_API_KEY;

//get summoner name and puuid
app.get('/api/summoner/:summonerName/:tagLine', async (req, res) => {
  const { summonerName, tagLine } = req.params;
  try {
    const responsePUUID = await axios.get(
      `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${tagLine}`,
      {
        headers: { 'X-Riot-Token': RIOT_API_KEY },
      }
    );
    const responseSumID = await axios.get(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${responsePUUID.data.puuid}`,
      {
        headers: { 'X-Riot-Token': RIOT_API_KEY },
      }
    );
    const responseRank = await axios.get(
      `https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${responseSumID.data.id}`,
      {
        headers: { 'X-Riot-Token': RIOT_API_KEY },
      }
    );

    const combinedRes = {...responsePUUID.data, ...responseSumID.data, rankDetails: responseRank.data[0]};
    res.json(combinedRes);

  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

app.get('api')
