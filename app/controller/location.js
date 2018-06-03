'use strict';

const Controller = require('egg').Controller;

class LocationController extends Controller {
  checkAuth() {
    if (!this.ctx.isAuthenticated()) {
      this.ctx.status = 401;
      return false;
    }

    return true;
  }

  async index() {
    this.ctx.body = await this.service.location.findAll();
  }

  async create() {
    if (!this.checkAuth()) {
      return;
    }

    this.ctx.body = await this.service.location.create(this.ctx.request.body);
  }

  async update() {
    if (!this.checkAuth()) {
      return;
    }

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.location.update(id, this.ctx.request.body);
  }

  async destroy() {
    if (!this.checkAuth()) {
      return;
    }

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.location.delete(id);
  }
}

module.exports = LocationController;
