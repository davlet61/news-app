const express = require('express');
const { getData, getMockData } = require('./dataController');

const controller = process.env.NODE_ENV === 'development'
  ? getMockData
  : getData;

const router = express.Router();

router.get('/news', controller);

module.exports = router;
