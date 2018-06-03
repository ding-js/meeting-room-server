'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    username: { type: STRING.BINARY, allowNull: false, unique: true },
    password: { type: STRING, allowNull: false },
    created_at: DATE,
    updated_at: DATE
  });

  return User;
};
