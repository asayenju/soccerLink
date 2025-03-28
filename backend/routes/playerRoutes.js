// playerRoutes.js
const express = require('express');
const router = express.Router();
const {getAllPlayers, addPlayer, getPlayerById, getPlayerByName, getPlayerByEmail, getPlayerByNationality, getPlayerByBirthDate, getPlayerByPhone, getPlayerByPosition, updatePlayerById, updatePlayerByName, deletePlayer} = require('../controllers/playerController');

// Define the route for getting all players
router.get('/players', getAllPlayers);
router.post('/players', addPlayer)
router.get('/players/id/:id', getPlayerById)
router.get('/players/name/:name', getPlayerByName)
router.get('/players/email/:email', getPlayerByEmail)
router.get('/players/nationality/:nationality', getPlayerByNationality)
router.get('/players/birthdate/:birthdate', getPlayerByBirthDate)
router.get('/players/phone/:phone', getPlayerByPhone)
router.get('/players/position/:position', getPlayerByPosition)
//router.put('/players/:id', updatePlayerById)
//router.put('/players/name/:name', updatePlayerByName)
module.exports = router;
