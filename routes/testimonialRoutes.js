import express from "express";
import {
  addTestimonial,
  updateTestimonialStatus,
  getAcceptedTestimonials,
  getAllTestimonials,
} from "../Controllers/testimonialController.js";

const router = express.Router();

// router.get("/courses", getAllCourses);
router.post("/add-testimonial", addTestimonial);
router.put("/testimonial/:id", updateTestimonialStatus);
router.get("/get-testimonial", getAcceptedTestimonials);
router.get("/get-all-testimonials", getAllTestimonials);

export default router;
