import express from "express";
import {
  getAllFaqs,
  addFaqs,
  editFaqs,
  deleteFaqs,
} from "../Controllers/faqControllers.js";

const router = express.Router();

router.get("/get-faqs", getAllFaqs);
router.post("/add-faqs", addFaqs);
router.put("/edit-faqs/:id", editFaqs);
router.delete("/delete-faqs/:id", deleteFaqs);

export default router;
