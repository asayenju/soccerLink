import { findOne, create } from '../models/Scout';
import { sign } from 'jsonwebtoken';

// Register a new scout
export async function registerScout(req, res) {
  const { name, email, password } = req.body;

  try {
    const scoutExists = await findOne({ email });
    if (scoutExists) {
      return res.status(400).json({ error: 'Scout already exists' });
    }

    const scout = await create({ name, email, password });
    const token = sign({ id: scout._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Error registering scout' });
  }
}

// Login a scout
export async function loginScout(req, res) {
  const { email, password } = req.body;

  try {
    const scout = await findOne({ email });
    if (!scout) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await scout.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = sign({ id: scout._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Error logging in scout' });
  }
}
