"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.hasMany(models.Bookings, {
        foreignKey: "courseId",
        as: "bookings",
      });
    }
  }

  Course.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      duration: DataTypes.STRING,
      fees: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Course",
      tableName: "courses",
    }
  );

  return Course;
};
