"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    static associate(models) {
      // Bookings belong to one Course
      Bookings.belongsTo(models.Courses, {
        foreignKey: "courseId",
        as: "course", // optional alias
        onDelete: "CASCADE", // optional behavior
        onUpdate: "CASCADE",
      });
    }
  }

  Bookings.init(
    {
      name: DataTypes.STRING,
      contact: DataTypes.BIGINT,
      courseId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Bookings",
    }
  );

  return Bookings;
};
