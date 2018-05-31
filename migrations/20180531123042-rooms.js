'use strict';

module.exports = {
  up(db, Sequelize) {
    return db.createTable('rooms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      location: {
        type: Sequelize.INTEGER,
        references: {
          model: 'location',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      name: { type: Sequelize.STRING, allowNull: false, unique: true },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  down(db) {
    return db.dropTable('rooms');
  }
};
