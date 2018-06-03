'use strict';

const Controller = require('egg').Controller;

class RoomController extends Controller {
  checkAuth() {
    if (!this.ctx.isAuthenticated()) {
      this.ctx.status = 401;
      return false;
    }

    return true;
  }

  async index() {
    this.ctx.body = await this.service.room.findAll();
  }

  async create() {
    if (!this.checkAuth()) {
      return;
    }

    this.ctx.body = await this.service.room.create(this.ctx.request.body);
  }

  async update() {
    if (!this.checkAuth()) {
      return;
    }

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.room.update(id, this.ctx.request.body);
  }

  async destroy() {
    if (!this.checkAuth()) {
      return;
    }

    const { id } = this.ctx.params;

    this.ctx.body = await this.service.room.delete(id);
  }
}

module.exports = RoomController;
