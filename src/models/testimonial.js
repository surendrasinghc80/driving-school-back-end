"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      modelName: "testimonial",
    }
  );
  return Testimonial;
};
