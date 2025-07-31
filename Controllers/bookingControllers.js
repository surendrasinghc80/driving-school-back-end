import db from "../src/models/index.js";
import { Op } from "sequelize";

const { User, Course, Booking } = db;

const startOfDay = new Date();
startOfDay.setHours(0, 0, 0, 0);

const endOfDay = new Date();
endOfDay.setHours(23, 59, 59, 999);

export const addBooking = async (req, res) => {
  const { name, contact, email, courseId, date, time } = req.body;

  try {
    const foundCourse = await Course.findByPk(courseId);
    if (!foundCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    const existingNumber = await Booking.findOne({
      where: {
        contact,
        createdAt: { [Op.between]: [startOfDay, endOfDay] },
      },
    });

    if (existingNumber) {
      return res.status(400).json({
        message: "This number has already been used for booking today.",
      });
    }

    // Combine `date` and `time` from request into a single Date object
    const bookingDateTime = new Date(`${date}T${time}`);

    // Validate: Disallow bookings in the past
    if (bookingDateTime < new Date()) {
      return res.status(400).json({
        success: false,
        message: "Cannot book for past date and time.",
      });
    }

    const newBooking = await Booking.create({
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
      booking: newBooking,
    });
  } catch (error) {
    console.log("Error creating booking:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getBooking = async (req, res) => {
  try {
    const allBookings = await Booking.findAll({
      include: [{ model: Course, as: "course", attributes: ["name"] }],
    });

    res.status(200).json({
      success: true,
      status: 200,
      bookings: allBookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getUserProfile = async (req, res) => {
  const { userId } = req.params;

  try {
    const foundUser = await User.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });

    if (!foundUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const userBookings = await Booking.findAll({
      where: { email: foundUser.email },
      include: [{ model: Course, as: "course", attributes: ["name"] }],
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      status: 200,
      message: "User profile fetched successfully",
      user: foundUser,
      bookings: userBookings,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
