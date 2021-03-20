const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default (sequelize, DataTypes) => {
  const UserPicture = sequelize.define(
    'UserPicture',
    {
      userId: {
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
      },
      pictureId: {
        type: DataTypes.INTEGER,
        references: { model: 'Pictures', key: 'id' },
        onDelete: 'CASCADE',
      },
    }
  );
    
  UserPicture.associate = (models) => {
    UserPicture.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    UserPicture.belongsTo(models.Picture, {
      foreignKey: 'pictureId',
    });
  };
  UserPicture.prototype.toJSON = function toJSON() {
    const values = { ...this.get() };
    return values;
  };
  return UserPicture;
};
