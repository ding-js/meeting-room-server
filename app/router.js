'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;

  router.resources('rooms', '/api/rooms', app.controller.room);

  router.resources('locations', '/api/locations', app.controller.location);

  router.resources('orders', '/api/orders', app.controller.order);
};
