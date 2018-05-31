'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('rooms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      name: { type: Sequelize.STRING, allowNull: false, unique: true },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('rooms');
  }
};
