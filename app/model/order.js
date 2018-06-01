'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;

  const Order = app.model.define('order', {
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

  return Order;
};
