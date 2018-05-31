'use strict';

const Service = require('egg').Service;
class LocationService extends Service {
  async find(id) {
    const loc = await this.ctx.model.Room.findById(id);

    if (loc) {
      return loc;
    }

    return Promise.reject({
      message: 'Invalid id'
    });
  }

  async findAll() {
    return this.ctx.model.Room.findAll();
  }

  async create(name) {
    if (!name || typeof name !== 'string') {
      return Promise.reject({
        message: 'Invalid name'
      });
    }

    return this.ctx.model.Room.create({ name });
  }

  async update(id, name) {
    const room = await this.find(id);

    return room.update({ name });
  }

  async delete(id) {
    const room = await this.find(id);

    return room.destroy();
  }
}

module.exports = LocationService;
