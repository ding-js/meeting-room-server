'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;

  router.resources('room', '/api/room', app.controller.room);
};