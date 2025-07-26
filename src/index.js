import express from "express";
import { sequelize } from "./models/index.js"; // Now works
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`❤️‍🔥 Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("💚 Database connected...");
  } catch (err) {
    console.error("🫀 DB connection error:", err);
  }
});
