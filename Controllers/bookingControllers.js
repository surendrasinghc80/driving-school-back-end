import db from "../src/models/index.js";
import { Op } from "sequelize";

const {User, Course, Bookings } = db;

const startOfDay = new Date();
startOfDay.setHours(0, 0, 0, 0);

const endOfDay = new Date();
endOfDay.setHours(23, 59, 59, 999);

export const addBooking = async (req, res) => {
  const { name, contact, email, courseId, date, time } = req.body;

  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const existingNumber = await Bookings.findOne({
      where: {
        contact: req.body.contact,
        createdAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
    });

    if (existingNumber) {
      return res.status(400).json({
        message: "This number has already been used for booking today.",
      });
    }

    // Combine `date` and `time` from request into a single Date object
    const bookingDateTime = new Date(`${date}T${time}`);

    // Get current date and time
    const now = new Date();

    // Validate: Disallow bookings in the past
    if (bookingDateTime < now) {
      return res.status(400).json({
        success: false,
        message: "Cannot book for past date and time.",
      });
    }

    const newBooking = await Bookings.create({
      name,
      contact,
      email,
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
    const bookings = await Bookings.findAll({
      include: [
        {
          model: Course,
          as: "course",
          attributes: ["name"], // only include course name
        },
      ],
    });

    res.status(200).json({
      success: true,
      status: 200,
      bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getUserProfile = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const bookings = await Bookings.findAll({
      where: { email: user.email },
      include: [
        {
          model: Course,
          as: "course",
          attributes: ["name"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      status: 200,
      message: "User profile fetched successfully",
      user,
      bookings,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};