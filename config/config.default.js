'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527681615630_3333';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    database: 'meeting_room',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: 'root'
  };

  return config;
};
