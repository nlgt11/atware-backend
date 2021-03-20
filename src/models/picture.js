const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default (sequelize, DataTypes) => {
  const Picture = sequelize.define(
    'Picture',
    {
      url :{
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {}
  );
  return Picture;
};
