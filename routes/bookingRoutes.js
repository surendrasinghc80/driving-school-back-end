import express from "express";
import { addBooking, getBooking } from "../Controllers/bookingControllers.js";

const router = express.Router();

router.post("/add-bookings", addBooking);
router.get("/get-bookings", getBooking);

export default router;
