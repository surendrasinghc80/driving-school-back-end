"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      // define association here
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
    }
  );
  return Course;
};
