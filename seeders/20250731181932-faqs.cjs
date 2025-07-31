"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "faqs",
      [
        {
          question: "What is the minimum age requirement to join the course?",
          answer:
            "The minimum age requirement is 18 years for four-wheeler training and 16 years for two-wheeler training, as per local laws.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "What types of licenses can I apply for through your school?",
          answer:
            "We offer training for both learner’s and permanent licenses, including two-wheeler and four-wheeler categories.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "How long does each course typically last?",
          answer:
            "Our beginner course runs for 2 weeks, while refresher and advanced courses range from 3 to 7 days depending on your needs.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "What is your refund or rescheduling policy?",
          answer:
            "We offer free rescheduling up to 24 hours before the session. Refunds are issued only for cancellations made at least 48 hours in advance",
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
