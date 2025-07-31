"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Enquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Enquiry.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.BIGINT,
      enquiry: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Enquiry",
      tableName: "enquiries",
    }
  );
  return Enquiry;
};
