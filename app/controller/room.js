'use strict';

const Controller = require('egg').Controller;

class RoomController extends Controller {
  async index() {
    this.ctx.body = await this.service.room.findAll();
  }

  async create() {
    this.ctx.body = await this.service.room.create(this.ctx.request.body);
  }

  async update() {
    const { id } = this.ctx.params;

    this.ctx.body = await this.service.room.update(id, this.ctx.request.body);
  }

  async destroy() {
    const { id } = this.ctx.params;

    this.ctx.body = await this.service.room.delete(id);
  }
}

module.exports = RoomController;
