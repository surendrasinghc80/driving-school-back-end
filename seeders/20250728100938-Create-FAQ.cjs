"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "faqs",
      [
        {
          ageRequired: "Leaner must be 18 years old or more.",
          licenseType: "Learner's License",
          courseDuration: "30 Days",
          refundPolicy:
            "Non-refundable after registration due to resource allocation.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("faqs", null, {});
  },
};
