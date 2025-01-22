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

app.get('/api/summoner/:summonerName', async (req, res) => {
  const { summonerName } = req.params;

  try {
    const response = await axios.get(
      `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/NA1?api_key=${RIOT_API_KEY}`,
      {
        headers: { 'X-Riot-Token': RIOT_API_KEY },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.get('/api/summoner/:summonerName', async (req, res) => {
  const { summonerName } = req.params;

  try {
    const response = await axios.get(
      `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/NA1?api_key=${RIOT_API_KEY}`,
      {
        headers: { 'X-Riot-Token': RIOT_API_KEY },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

app.get('api')
