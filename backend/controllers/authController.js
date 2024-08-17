require('dotenv').config();
const Scout = require('../models/Scout');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new scout
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if scout already exists
        let scout = await Scout.findOne({ email });
        if (scout) {
            return res.status(400).json({ msg: 'Scout already exists' });
        }

        // Create a new scout instance with hashed password
        scout = new Scout({ name, email, password });

        await scout.save();

        // Generate JWT token
        const token = jwt.sign({ id: scout._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            msg: 'Successfully registered',
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

// Login a scout
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the scout by email
        const scout = await Scout.findOne({ email });
        if (!scout) {
            return res.status(400).json({ msg: 'Invalid email' });
        }

        // Compare the provided password with the stored hash
        const isMatch = await bcrypt.compare(password, scout.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: scout._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            msg: 'Successfully logged in',
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
