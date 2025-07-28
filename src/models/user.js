import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
      },
      age: DataTypes.INTEGER,
      phoneNumber: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
