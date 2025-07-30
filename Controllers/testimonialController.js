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

export const getAllTestimonials = async (req, res) => {
  try {
    const testimonial = await Testimonial.findAll();
    res.status(200).json({ success: true, status: 200, testimonial });
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateTestimonialStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["pending", "accepted", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid status value. Allowed values: pending, accepted, rejected",
      });
    }

    const testimonial = await Testimonial.findByPk(id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    testimonial.status = status;
    await testimonial.save();

    res.status(200).json({
      success: true,
      status: 200,
      message: "Testimonial status updated successfully",
      // testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while updating testimonial status",
      error: error.message,
    });
  }
};

export const getAcceptedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll({
      where: { status: "accepted" },
    });

    res.status(200).json({
      success: true,
      status: 200,
      message: "Accepted testimonials fetched successfully",
      testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching testimonials",
      error: error.message,
    });
  }
};
