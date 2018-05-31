'use strict';

const Controller = require('egg').Controller;

class LocationController extends Controller {
  async index() {
    this.ctx.body = await this.service.location.findAll();
  }

  async create() {
    const { name } = this.ctx.request.body;

    this.ctx.body = await this.service.location.create(name);
  }

  async update() {
    const { name } = this.ctx.request.body;
    const { id } = this.ctx.params;

    this.ctx.body = await this.service.location.update(id, name);
  }

  async destroy() {
    const { id } = this.ctx.params;

    if (Number(id) === 1) {
      return Promise.reject({
        message: 'Default location can not be deleted'
      });
    }

    this.ctx.body = await this.service.location.delete(id);
  }
}

module.exports = LocationController;
