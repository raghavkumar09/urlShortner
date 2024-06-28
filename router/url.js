const express = require('express');
const router = express.Router();
const { handleCreateUrl , handleAnaliticalData} = require('../controller/url');

router.post('/', handleCreateUrl);

router.get('/analytics/:shortUrl', handleAnaliticalData)


module.exports = router