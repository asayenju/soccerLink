const mongoose = require('mongoose');

// Define the schema for the scout
const scoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Reference to the players scouted by this scout
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }]
});

// Create the model from the schema
const Scout = mongoose.model('Scout', scoutSchema);

// Export the model
module.exports = Scout;
