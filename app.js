'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    const ctx = app.createAnonymousContext();

    const locations = await ctx.model.Location.findAll();

    if (!locations.length) {
      await ctx.service.location.create({ name: 'Default Location' });
    }
  });
};
