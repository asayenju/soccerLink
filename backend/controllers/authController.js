require('dotenv').config(); // Make sure this is required at the top

const Scout = require('../models/Scout');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Received request:', req.body);
  
    try {
        // Check if scout already exists
        let scout = await Scout.findOne({ email });
        if (scout) {
            console.log('Scout already exists');
            return res.status(400).json({ msg: 'Scout already exists' });
        }
  
        // Create a new scout instance
        scout = new Scout({
            name,
            email,
            password: bcrypt.hashSync(password, 10),
        });
        console.log('Scout created:', scout);
  
        await scout.save();
  
        // Generate JWT token
        const token = jwt.sign({ id: scout._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        console.log('Token generated:', token);
  
        res.status(201).json({
            token,
            scout: {
                id: scout._id,
                name: scout.name,
                email: scout.email,
            },
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Login a scout
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the scout exists
        const scout = await Scout.findOne({ email });
        if (!scout) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, scout.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: scout._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({
            token,
            scout: {
                id: scout._id,
                name: scout.name,
                email: scout.email,
            },
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
