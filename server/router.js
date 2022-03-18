const express = require('express');
const path = require('path');

const {
  getData,
  getMockData,
  textToSpeach,
  getLatest,
} = require('./dataController');

const controller = process.env.NODE_ENV === 'development' ? getMockData : getData;

const router = express.Router();

router.get('/news', controller);
router.get('/news/latest', getLatest);
router.get('/voice', textToSpeach);
router.use('/', (_req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

module.exports = router;
