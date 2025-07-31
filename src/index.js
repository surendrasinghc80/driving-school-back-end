import express from "express";
import { sequelize } from "./models/index.js";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "../routes/userRoutes.js";
import courseRoutes from "../routes/courseRoutes.js";
import faqRoutes from "../routes/faqRoutes.js";
import testimonialRoutes from "../routes/testimonialRoutes.js";
import bookingRoutes from "../routes/bookingRoutes.js";
import enquiryRoutes from "../routes/enquiryRoutes.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

// All routes are here
app.use("/api/user", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", faqRoutes);
app.use("/api", testimonialRoutes);
app.use("/api", bookingRoutes);
app.use("/api", enquiryRoutes);

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
