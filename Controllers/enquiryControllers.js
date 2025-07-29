import db from "../src/models/index.js";

const { Enquiry } = db;

export const addEnquiry = async (req, res) => {
  const { name, email, phoneNumber, enquiry } = req.body;

  try {
    const newEnquiry = await Enquiry.create({
      name,
      email,
      phoneNumber,
      enquiry,
    });

    return res.status(201).json({
      status: 201,
      success: true,
      message: "Enquiry submitted",
      enqiry: newEnquiry,
    });
  } catch (error) {
    console.log("Error creating enquiry", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findAll();
    res.status(200).json({ success: true, status: 200, enquiry });
  } catch (error) {
    console.error("Error fetching enquiry:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
