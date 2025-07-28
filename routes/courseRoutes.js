import express from "express";
import { getAllCourses } from "../Controllers/courseContollers.js";
import { getAllFaqs } from "../Controllers/faqControllers.js";

const router = express.Router();

router.get("/courses", getAllCourses);
router.get("/faqs", getAllFaqs);

export default router;
