import express from "express";
import { addEnquiry } from "../Controllers/enquiryControllers.js";

const router = express.Router();

router.post("/add-enquiry", addEnquiry);

export default router;
