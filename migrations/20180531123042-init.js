'use strict';

module.exports = {
  async up(db, Sequelize) {
    const { INTEGER, DATE, STRING } = Sequelize;

    await db.createTable('locations', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      name: { type: STRING, allowNull: false, unique: true },
      start_time: { type: INTEGER, allowNull: false },
      end_time: { type: INTEGER, allowNull: false },
      created_at: DATE,
      updated_at: DATE
    });

    await db.createTable('rooms', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      location: {
        type: INTEGER,
        references: {
          model: 'locations',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      name: { type: STRING, allowNull: false, unique: true },
      created_at: DATE,
      updated_at: DATE
    });

    await db.createTable('orders', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
      room: {
        type: INTEGER,
        references: {
          model: 'rooms',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      start_time: { type: INTEGER, allowNull: false },
      end_time: { type: INTEGER, allowNull: false },
      scheduled_date: { type: STRING, allowNull: false },
      ordered_by: { type: STRING, allowNull: false },
      created_at: DATE,
      updated_at: DATE
    });

    await db.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
      username: { type: STRING.BINARY, allowNull: false, unique: true },
      password: { type: STRING, allowNull: false },
      created_at: DATE,
      updated_at: DATE
    });
  },

  async down(db) {
    await db.dropTable('orders');
    await db.dropTable('rooms');
    await db.dropTable('locations');
    await db.dropTable('users');
  }
};
