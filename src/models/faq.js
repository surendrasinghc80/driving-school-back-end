"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class FAQ extends Model {
    static associate(models) {
      // define association here
    }
  }
  FAQ.init(
    {
      ageRequired: DataTypes.TEXT,
      licenseType: DataTypes.TEXT,
      courseDuration: DataTypes.TEXT,
      refundPolicy: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "FAQ",
    }
  );
  return FAQ;
};
