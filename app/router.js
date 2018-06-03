'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;

  const local = app.passport.authenticate('local', {
    successRedirect: '/api/users/current'
  });

  router.resources('rooms', '/api/rooms', app.controller.room);

  router.resources('locations', '/api/locations', app.controller.location);

  router.resources('orders', '/api/orders', app.controller.order);

  router.post('/api/login', local);

  router.get('/api/logout', app.controller.user.logout);

  router.get('/api/users/current', app.controller.user.currentUser);

  router.resources('users', '/api/users', app.controller.user);
};
