'use strict';

const Controller = require('egg').Controller;

class LocationController extends Controller {
  checkAuth() {
    if (!this.ctx.isAuthenticated()) {
      this.ctx.throw(401);
    }
  }

  async index() {
    this.ctx.body = await this.service.location.findAll();
  }

  async create() {
    this.checkAuth();

    this.ctx.body = await this.service.location.create(this.ctx.request.body);
  }

  async update() {
    this.checkAuth();

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.location.update(id, this.ctx.request.body);
  }

  async destroy() {
    this.checkAuth();

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.location.delete(id);
  }
}

module.exports = LocationController;
