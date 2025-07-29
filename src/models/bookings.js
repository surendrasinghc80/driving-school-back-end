// src/models/bookings.js
"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Bookings extends Model {
    static associate(models) {
      Bookings.belongsTo(models.Course, {
        foreignKey: "courseId",
        as: "course",
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
      tableName: "bookings",
    }
  );

  return Bookings;
};
