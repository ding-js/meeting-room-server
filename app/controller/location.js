'use strict';

const Controller = require('egg').Controller;

class LocationController extends Controller {
  async index() {
    this.ctx.body = await this.service.location.findAll();
  }

  async create() {
    this.ctx.body = await this.service.location.create(this.ctx.request.body);
  }

  async update() {
    const { id } = this.ctx.params;

    this.ctx.body = await this.service.location.update(id, this.ctx.request.body);
  }

  async destroy() {
    const { id } = this.ctx.params;

    if ((await this.service.location.findAll().length) <= 1) {
      return Promise.reject(new Error('Can not delete all location'));
    }

    this.ctx.body = await this.service.location.delete(id);
  }
}

module.exports = LocationController;
