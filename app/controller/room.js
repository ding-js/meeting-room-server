'use strict';

const Controller = require('egg').Controller;

class RoomController extends Controller {
  async index() {
    this.ctx.body = await this.service.room.findAll();
  }

  async create() {
    const { name } = this.ctx.request.body;

    this.ctx.body = await this.service.room.create(name);
  }

  async update() {
    const { name } = this.ctx.request.body;
    const { id } = this.ctx.params;

    this.ctx.body = await this.service.room.update(id, name);
  }

  async destroy() {
    const { id } = this.ctx.params;

    this.ctx.body = await this.service.room.delete(id);
  }
}

module.exports = RoomController;
