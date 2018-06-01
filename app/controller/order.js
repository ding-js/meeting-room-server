'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async index() {
    this.ctx.body = await this.service.order.findAll(this.ctx.query);
  }

  async create() {
    this.ctx.body = await this.service.order.create(this.ctx.request.body);
  }

  async destroy() {
    const { id } = this.ctx.params;

    this.ctx.body = await this.service.order.delete(id);
  }
}

module.exports = OrderController;
