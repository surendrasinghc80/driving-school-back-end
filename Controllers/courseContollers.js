import db from "../src/models/index.js";

const { Course } = db;

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json({ success: true, status: 200, courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
