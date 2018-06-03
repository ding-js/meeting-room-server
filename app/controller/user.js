'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  checkAuth() {
    if (!this.ctx.isAuthenticated()) {
      this.ctx.status = 401;
      return false;
    }

    return true;
  }

  async logout() {
    this.ctx.body = await this.ctx.logout();
  }

  async currentUser() {
    if (!this.checkAuth()) {
      return;
    }

    this.ctx.body = this.ctx.user;
  }

  async index() {
    if (!this.checkAuth()) {
      return;
    }

    this.ctx.body = await this.service.user.findAll();
  }

  async create() {
    if (!this.checkAuth()) {
      return;
    }

    this.ctx.body = await this.service.user.create(this.ctx.request.body);
  }

  async update() {
    if (!this.checkAuth()) {
      return;
    }

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.user.update(id, this.ctx.request.body);
  }

  async destroy() {
    if (!this.checkAuth()) {
      return;
    }

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.user.delete(id);
  }
}

module.exports = UserController;
