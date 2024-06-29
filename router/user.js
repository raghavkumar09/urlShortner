const express = require('express');
const router = express.Router();
const { handleCreateUser , handleLogin} = require('../controller/user');

router.post('/', handleCreateUser); 
router.post('/login', handleLogin); 


module.exports = router