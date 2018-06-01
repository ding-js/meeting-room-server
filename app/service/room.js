'use strict';

const Service = require('egg').Service;
class RoomService extends Service {
  async find(id) {
    const room = await this.ctx.model.Room.findById(id);

    if (room) {
      return room;
    }

    return Promise.reject(new Error('Invalid id'));
  }

  async findAll() {
    return this.ctx.model.Room.findAll();
  }

  async create({ name, location }) {
    if (!name || typeof name !== 'string') {
      return Promise.reject(new Error('Invalid name'));
    }

    return this.ctx.model.Room.create({ name, location });
  }

  async update(id, { name }) {
    const room = await this.find(id);

    return room.update({ name });
  }

  async delete(id) {
    const room = await this.find(id);

    return room.destroy();
  }
}

module.exports = RoomService;
