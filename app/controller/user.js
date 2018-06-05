'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  checkAuth() {
    if (!this.ctx.isAuthenticated()) {
      this.ctx.throw(401);
    }
  }

  async logout() {
    this.ctx.body = await this.ctx.logout();
  }

  async currentUser() {
    this.checkAuth();

    this.ctx.body = this.ctx.user;
  }

  async index() {
    this.checkAuth();

    this.ctx.body = await this.service.user.findAll();
  }

  async create() {
    this.checkAuth();

    this.ctx.body = await this.service.user.create(this.ctx.request.body);
  }

  async update() {
    this.checkAuth();

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.user.update(id, this.ctx.request.body);
  }

  async destroy() {
    this.checkAuth();

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.user.delete(id);
  }
}

module.exports = UserController;
