import express from "express";
import {
  addBooking,
  getBooking,
  getUserProfile,
} from "../Controllers/bookingControllers.js";

const router = express.Router();

router.post("/add-bookings", addBooking);
router.get("/get-bookings", getBooking);
router.get("/profile/:userId", getUserProfile);

export default router;
