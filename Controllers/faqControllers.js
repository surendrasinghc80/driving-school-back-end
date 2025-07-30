import db from "../src/models/index.js";

const { Faqs } = db;

export const getAllFaqs = async (req, res) => {
  try {
    const faqs = await Faqs.findAll();

    res.status(200).json({
      success: true,
      status: 200,
      faqs,
    });
  } catch (error) {
    console.log("Error fetching Faqs", error);
    res
      .status(500)
      .json({ success: false, status: 500, message: "Server Error" });
  }
};

export const addFaqs = async (req, res) => {
  try {
    const faqs = await Faqs.create(req.body);
    res.status(201).json({
      success: true,
      status: 201,
      message: "FAQ's added Successfully",
      faqs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "Error while adding FAQ's",
      error: error.message,
    });
  }
};
