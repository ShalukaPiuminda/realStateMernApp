import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser = new User({ email, username, password:hashedPassword }); // Pass an object here
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send the error message
  }
};
