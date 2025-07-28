import express from "express";
import { addTestimonial } from "../Controllers/testimonialController.js";

const router = express.Router();

// router.get("/courses", getAllCourses);
router.post("/add-testimonial", addTestimonial);

export default router;
