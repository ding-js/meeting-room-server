'use strict';

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
};

exports.passport = {
  enable: true,
  package: 'egg-passport'
};

exports.session = {
  key: 'EGG_SESS',
  maxAge: 24 * 3600 * 1000,
  httpOnly: true,
  encrypt: true
};
