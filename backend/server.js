const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const scoutRoutes = require('./routes/authRoutes');
const playerRoutes = require('./routes/playerRoutes')
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/scouts', scoutRoutes);

// Use the player routes
app.use('/api/players', playerRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
