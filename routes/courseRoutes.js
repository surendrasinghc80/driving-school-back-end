import express from "express";
import {
  getAllCourses,
  addCourse,
  editCourse,
  deleteCourse,
} from "../Controllers/courseContollers.js";

const router = express.Router();

router.get("/courses", getAllCourses);
router.post("/add-course", addCourse);
router.put("/edit-course/:id", editCourse);
router.delete("/delete-course/:id", deleteCourse);

export default router;
