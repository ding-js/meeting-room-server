'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Room = app.model.define('room', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    name: { type: STRING, allowNull: false, unique: true },
    location: {
      type: INTEGER,
      references: {
        model: 'locations',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    created_at: DATE,
    updated_at: DATE
  });

  return Room;
};
