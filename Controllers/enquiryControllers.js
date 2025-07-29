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
      message: "Enquiry created",
      enqiry: newEnquiry,
    });
  } catch (error) {
    console.log("Error creating enquiry", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
