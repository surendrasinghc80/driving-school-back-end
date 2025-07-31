import db from "../src/models/index.js";

const { Faq } = db;

export const getAllFaqs = async (req, res) => {
  try {
    const faqs = await Faq.findAll();

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
    const faqs = await Faq.create(req.body);
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

export const editFaqs = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await Faq.findByPk(id);

    if (!faq) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "FAQ not found",
      });
    }

    await faq.update(req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "FAQ updated successfully",
      faq,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "Error updating FAQ",
      error: error.message,
    });
  }
};

export const deleteFaqs = async (req, res) => {
  try {
    const { id } = req.params;
    const faqs = await Faq.findByPk(id);

    if (!faqs) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "FAQ not found",
      });
    }

    await faqs.destroy();

    res.status(200).json({
      success: true,
      status: 200,
      message: "FAQ deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "Error deleting FAQ",
      error: error.message,
    });
  }
};
