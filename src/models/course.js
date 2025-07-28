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
      duration: DataTypes.STRING,
      fees: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );

  return Course;
};
