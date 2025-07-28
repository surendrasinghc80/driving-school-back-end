import db from "../src/models/index.js";

const { Testimonial } = db;

export const addTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json({
      success: true,
      status: 201,
      message: "Testimonial created Syccessfully",
      testimonial,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "Error while adding testimonial",
      error: error.message,
    });
  }
};
