"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Testimonials", "status", {
      type: Sequelize.ENUM("accepted", "rejected", "pending"),
      allowNull: false,
      defaultValue: "pending",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Testimonials", "status", {
      type: Sequelize.ENUM,
    });
  },
};
