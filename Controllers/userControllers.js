import db from "../src/models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { registerSchema, loginSchema } from "../src/validators/userSchema.js";

const { User } = db;

export const register = async (req, res) => {
  try {
    const data = registerSchema.parse(req.body);
    const existing = await User.findOne({ where: { email: data.email } });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hash = await bcrypt.hash(data.password, 10);
    const user = await User.create({ ...data, password: hash });

    res.status(201).json({
      success: true,
      status: 201,
      message: "User registered",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        phoneNumber: user.phoneNumber,
        age: user.age,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      error: error.message || "Validation error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      success: true,
      status: 200,
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(400).json({ success: false, status: 400, error: error.message });
  }
};
