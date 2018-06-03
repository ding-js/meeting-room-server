'use strict';
const _ = require('lodash');

const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  app.beforeStart(async () => {
    const ctx = app.createAnonymousContext();

    const locations = await ctx.service.location.findAll();

    if (!locations.length) {
      await ctx.service.location.create({ name: 'Default Location' });
    }

    const users = await ctx.service.user.findAll();

    if (!users.length) {
      await ctx.service.user.create({ username: 'Admin', password: 'admin' });
    }
  });

  // 挂载 strategy
  app.passport.use(
    new LocalStrategy(
      {
        passReqToCallback: true
      },
      (req, username, password, done) => {
        // format user
        const user = {
          provider: 'local',
          username,
          password
        };

        return app.passport.doVerify(req, user, done);
      }
    )
  );

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    return ctx.service.user.verify(user);
  });

  app.passport.serializeUser(async (ctx, user) => {
    return _.pick(user, ['username', 'id']);
  });

  app.passport.deserializeUser(async (ctx, user) => {
    return user;
  });
};
