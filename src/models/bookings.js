"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.Course, {
        foreignKey: "courseId",
        as: "course",
      });
    }
  }

  Booking.init(
    {
      name: DataTypes.STRING,
      contact: DataTypes.BIGINT,
      email: DataTypes.STRING,
      courseId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Booking",
      tableName: "bookings",
    }
  );

  return Booking;
};
