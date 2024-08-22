// playerRoutes.js
const express = require('express');
const router = express.Router();
const {getAllPlayers, addPlayer} = require('../controllers/playerController');

// Define the route for getting all players
router.get('/players', getAllPlayers);
router.post('/players', addPlayer)

module.exports = router;
