"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "users",
    [
      {
        name: "John Doe",
        email: "john@gmail.com",
        password: "74107410",
        age: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("users", null, {});
}
