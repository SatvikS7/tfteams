import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const RIOT_API_KEY = process.env.VITE_RIOT_API_KEY;

app.get('/api/summoner/:summonerName', async (req, res) => {
  const { summonerName } = req.params;

  try {
    const response = await axios.get(
      `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}`,
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
