const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar_url :{
        type: DataTypes.STRING,
        allowNull: true,
      }
      
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          const saltRounds = 10;
          const passwordHashed = await bcrypt.hash(user.password, saltRounds);
          user.password = passwordHashed;
        },
      },
    }
  );

  User.prototype.toJSON = function toJSON() {
    const values = { ...this.get() };
    delete values.password;
    return values;
  };
  return User;
};
