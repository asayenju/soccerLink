const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

// Hash the password before saving the scout
scoutSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
scoutSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create the model from the schema
const Scout = mongoose.model('Scout', scoutSchema);

module.exports = Scout;
