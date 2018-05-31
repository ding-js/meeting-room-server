'use strict';

module.exports = {
  async up(db, Sequelize) {
    await db.createTable('location', {
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

    return db.bulkInsert('location', [
      {
        id: 1,
        name: 'Default Location',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down(db) {
    return db.dropTable('location');
  }
};
