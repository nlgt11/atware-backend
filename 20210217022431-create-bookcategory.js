module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BookCategories', {
      bookId: {
        type: Sequelize.INTEGER,
        references: { model: 'Books', key: 'id' },
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id' },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('BookCategories');
  },
};
