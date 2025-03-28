// playerRoutes.js
const express = require('express');
const router = express.Router();
const {getAllPlayers, addPlayer, getPlayerById, getPlayerByName, getPlayerByEmail, getPlayerByNationality, getPlayerByBirthDate, getPlayerByPhone, getPlayerByPosition, updatePlayerStats, deletePlayer} = require('../controllers/playerController');

router.get('/players', getAllPlayers);
router.post('/players', addPlayer);

// Specific GET routes first
router.get('/players/id/:id', getPlayerById);
router.get('/players/name/:name', getPlayerByName);
router.get('/players/email/:email', getPlayerByEmail);
router.get('/players/nationality/:nationality', getPlayerByNationality);
router.get('/players/birthdate/:birthdate', getPlayerByBirthDate);
router.get('/players/phone/:phone', getPlayerByPhone);
router.get('/players/position/:position', getPlayerByPosition);

// PUT update route (comes after all specific GETs)
router.put('/players/:id', updatePlayerStats);

module.exports = router;
