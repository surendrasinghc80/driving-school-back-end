"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          name: "Beginner friendly",
          slug: "beginner-friendly-course",
          duration: "1 Month",
          fees: 3000,
          description:
            "A beginner-friendly driving course should focus on building foundational skills and confidence in a supportive environment. It should cover basic car controls, maneuvering techniques, and traffic rules, with an emphasis on practical, hands-on experience and gradual progression.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Intermediate Level",
          slug: "beginner-friendly-course",
          duration: "1 Month",
          fees: 3500,
          description:
            "An intermediate driving course builds upon basic driving skills, focusing on defensive driving techniques, hazard perception, and advanced maneuvers. It aims to enhance a driver's confidence and competence, preparing them for more challenging road conditions and scenarios. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Advance Level",
          slug: "beginner-friendly-course",
          duration: "1 Month",
          fees: 4000,
          description:
            "An advanced driving course is designed for licensed drivers who want to enhance their skills and confidence behind the wheel. These courses typically focus on refining driving techniques, improving hazard perception, and building confidence in various driving situations. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};
