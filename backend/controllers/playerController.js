const Player = require('../models/Player');

// Create a new player
exports.createPlayer = async (req, res) => {
  const { name, age, position, stats } = req.body;
  try {
    const player = new Player({ name, age, position, stats, scout: req.scout.id });
    await player.save();
    res.json(player);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get all players
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.find({ scout: req.scout.id });
    res.json(players);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
