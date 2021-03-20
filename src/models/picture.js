const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default (sequelize, DataTypes) => {
  const Picture = sequelize.define(
    'Picture',
    {
      url :{
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
      }
    },
    {}
  );
  return Picture;
};
