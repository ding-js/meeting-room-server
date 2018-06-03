'use strict';

module.exports = () => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = 'IMc0D~WAF;u~hb&4W5_N';

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
