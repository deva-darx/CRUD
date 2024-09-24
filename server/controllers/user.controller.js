import User from '../models/user.model.js';

  export const addUser = async (req, res) => {
  try {
    const { username, email, password, department , course} = req.body;
    const user = new User({ username, email, password, department, course });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

  export const getAllUser = async (req, res) => {
    try {
      const users = await User.find().populate('department').populate('course');
      res.json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  
  export const updateUser = async (req, res) => {
    try {
      const { username, email, password, department, course } = req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { username, email, password, department, course},
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  export const deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }