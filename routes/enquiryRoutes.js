import express from "express";
import { addEnquiry, getEnquiry } from "../Controllers/enquiryControllers.js";

const router = express.Router();

router.post("/add-enquiry", addEnquiry);
router.get("/get-enquiry", getEnquiry);

export default router;
