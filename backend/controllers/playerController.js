const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Create a new player
router.post('/players', async (req, res) => {
  try {
      // Check if the name field is present
      const { name } = req.body;
      if (!name) {
          return res.status(400).send({ message: 'Name is required.' });
      }

      // Set default values for stats
      const playerData = {
          ...req.body,
          shots: req.body.shots || "N/A",
          goals: req.body.goals || "N/A",
          assists: req.body.assists || "N/A",
          // Add other stats here with default values
      };

      const player = new Player(playerData);
      await player.save();
      res.status(201).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});


// Get all players
router.get('/players', async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).send(players);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a specific player by ID
router.get('/players/:id', async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).send({ message: 'Player not found' });
        }
        res.status(200).send(player);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a specific player by Name
router.get('/players/:name', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Age
router.get('/players/:age', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Position
router.get('/players/:position', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Nationality
router.get('/players/:nationality', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Email
router.get('/players/:email', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Phone
router.get('/players/:phone', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Update a player by ID
router.put('/players/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!player) {
            return res.status(404).send({ message: 'Player not found' });
        }
        res.status(200).send(player);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update a player by Name
router.put('/players/:name', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by Age
router.put('/players/:age', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by Position
router.put('/players/:position', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by Nationality
router.put('/players/:nationality', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by email
router.put('/players/:email', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by Phone Number
router.put('/players/:phone', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by 
router.put('/players/:id', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Delete a player by ID
router.delete('/players/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) {
            return res.status(404).send({ message: 'Player not found' });
        }
        res.status(200).send({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
