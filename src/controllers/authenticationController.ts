import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: "Registration failed", details: error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });
    res.header({token})
    res.json({ 
        message:"User logged in successfully" 
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed", details: error });
  }
};
