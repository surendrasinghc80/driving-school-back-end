import express from "express";
import { getAllFaqs, addFaqs } from "../Controllers/faqControllers.js";

const router = express.Router();

router.get("/get-faqs", getAllFaqs);
router.post("/add-faqs", addFaqs);

export default router;
