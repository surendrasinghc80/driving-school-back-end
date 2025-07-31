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

export const addCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      success: true,
      status: 201,
      message: "Course created Successfully",
      // course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "Error while adding course",
      error: error.message,
    });
  }
};

export const editCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "Course not found",
      });
    }

    await course.update(req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Course updated successfully",
      // course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "Error updating course",
      error: error.message,
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "Course not found",
      });
    }

    await course.destroy();

    res.status(200).json({
      success: true,
      status: 200,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "Error deleting course",
      error: error.message,
    });
  }
};
