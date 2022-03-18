const path = require('path');
const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

const date = new Date();
const today = date.toISOString().substring(0, 10);

const { API_KEY } = process.env;
const { TEXT_TO_SPEACH } = process.env;
const basePathToData = path.join(__dirname, '../server/mock/news.json');

const getJsonData = filePath => JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const getMockData = (_req, res) => {
  const data = getJsonData(basePathToData);
  setTimeout(() => res.json(data), 100);
};

const getData = async (req, res) => {
  const q = req.query.search;
  await process.nextTick(() => {});
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${q}&from=${today}&sortBy=publishedAt&language=en`,
      {
        headers: { 'X-Api-Key': API_KEY },
      },
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Ops! Something went wrong' });
  }
};

const getLatest = async (req, res) => {
  await process.nextTick(() => {});
  try {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt',
      {
        headers: { 'X-Api-Key': API_KEY },
      },
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Ops! Something went wrong' });
  }
};

const textToSpeach = async (req, res) => {
  const q = req.query.search;
  const options = {
    method: 'GET',
    url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
    params: {
      hl: 'en-us',
      src: `${q}`,
      key: TEXT_TO_SPEACH,
      f: '16khz_16bit_stereo',
      c: 'mp3',
      r: '0',
      b64: true,
    },
    headers: {
      'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com',
      'x-rapidapi-key': 'e2cab1cc1emsh18c45ea14186247p1663c9jsn5ead56b07558',
    },
  };

  await process.nextTick(() => {});
  try {
    const response = await axios.request(options);
    res.set({ 'content-type': 'audio/mpeg' }).send(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Ops! Something went wrong' });
  }
};

module.exports = {
  getMockData,
  getData,
  textToSpeach,
  getLatest,
};
