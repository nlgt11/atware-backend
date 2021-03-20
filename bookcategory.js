export default (sequelize, DataTypes) => {
  const BookCategory = sequelize.define('BookCategory', {
    bookId: {
      type: DataTypes.INTEGER,
      references: { model: 'Books', key: 'id' },
      onDelete: 'CASCADE',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: { model: 'Categories', key: 'id' },
      onDelete: 'CASCADE',
    },
  });

  BookCategory.associate = (models) => {
    BookCategory.belongsTo(models.Book, {
      foreignKey: 'bookId',
    });
    BookCategory.belongsTo(models.Category, {
      foreignKey: 'categoryId',
    });
  };

  return BookCategory;
};
