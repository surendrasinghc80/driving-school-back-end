"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("74107410", 10);
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@gmail.com",
          password: hashedPassword,
          age: 18,
          phoneNumber: "6280500401",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
