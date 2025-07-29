import db from "../src/models/index.js";

const { Course, Bookings } = db;

export const addBooking = async (req, res) => {
  const { name, contact, courseId, date, time } = req.body;

  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const newBooking = await Bookings.create({
      name,
      contact,
      courseId,
      date,
      time,
    });

    return res.status(201).json({
      status: 201,
      success: true,
      message: "Booking created successfully",
      bookings: newBooking,
    });
  } catch (error) {
    console.log("Error creating booking :", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getBooking = async (req, res) => {
  try {
    const bookings = await Bookings.findAll();
    res.status(200).json({ success: true, status: 200, bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
