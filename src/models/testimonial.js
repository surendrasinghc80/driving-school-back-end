"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Testimonial extends Model {
    static associate(models) {
      // define association here
    }
  }
  Testimonial.init(
    {
      reviewerName: DataTypes.STRING,
      stars: DataTypes.INTEGER,
      reveiw: DataTypes.TEXT,
      status: {
        type: DataTypes.ENUM("pending", "accepted", "rejected"),
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "Testimonial",
      tableName: "testimonials",
    }
  );
  return Testimonial;
};
