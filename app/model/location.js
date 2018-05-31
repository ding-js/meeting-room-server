'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Location = app.model.define('location', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    name: { type: STRING, allowNull: false, unique: true },
    created_at: DATE,
    updated_at: DATE
  });

  return Location;
};
