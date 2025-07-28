import express from "express";
import { getAllFaqs } from "../Controllers/faqControllers.js";

const router = express.Router();

router.get("/get-faqs", getAllFaqs);

export default router;
