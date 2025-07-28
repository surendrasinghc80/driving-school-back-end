import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Faq extends Model {
    static associate(models) {
      // define association here
    }
  }

  Faq.init(
    {
      ageRequirement: DataTypes.STRING,
      licenseType: DataTypes.STRING,
      cousceDuration: DataTypes.STRING,
      refundPolicy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Faq",
    }
  );

  return Faq;
};
