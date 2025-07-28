import db from "../src/models/index.js";

const { FAQ } = db;

export const getAllFaqs = async (req, res) => {
  try {
    const faqs = await FAQ.findAll();
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
