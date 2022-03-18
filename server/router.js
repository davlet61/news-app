const express = require('express');
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

module.exports = router;
