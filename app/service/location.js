'use strict';

const Service = require('egg').Service;
class LocationService extends Service {
  async find(id) {
    const loc = await this.ctx.model.Location.findById(id);

    if (loc) {
      return loc;
    }

    return Promise.reject(new Error('Invalid id'));
  }

  async findAll() {
    return this.ctx.model.Location.findAll();
  }

  async create({ name, startTime = 540, endTime = 1080 }) {
    if (!name || typeof name !== 'string') {
      return Promise.reject(new Error('Invalid name'));
    }

    return this.ctx.model.Location.create({
      name,
      start_time: startTime,
      end_time: endTime
    });
  }

  async update(id, { name, startTime, endTime }) {
    const loc = await this.find(id);

    return loc.update({
      name,
      start_time: startTime,
      end_time: endTime
    });
  }

  async delete(id) {
    const loc = await this.find(id);

    const locations = await this.service.location.findAll();

    if (locations.length <= 1) {
      return Promise.reject(new Error('Can not delete all location'));
    }

    return loc.destroy();
  }
}

module.exports = LocationService;
