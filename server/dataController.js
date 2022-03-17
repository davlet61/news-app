const path = require('path');
const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env;
const basePathToData = path.join(__dirname, '../server/mock/news.json');

const getJsonData = filePath => JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const getMockData = (_req, res) => {
  const data = getJsonData(basePathToData);
  setTimeout(
    () => res.set({ 'Access-Control-Allow-Origin': '*' }).json(data),
    100,
  );
};

const getData = async (req, res) => {
  const q = req.query.search;
  await process.nextTick(() => {});
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${q}&from=2022-02-16&sortBy=publishedAt&language=en`,
      {
        headers: { 'X-Api-Key': API_KEY, 'Access-Control-Allow-Origin': '*' },
      },
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Ops! Something went wrong' });
  }
};

module.exports = { getMockData, getData };
