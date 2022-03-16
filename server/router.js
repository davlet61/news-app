const express = require('express');

const router = express.Router();

router.get('/news', (req, res) => res.send('Hi Mom!'));

module.exports = router;
