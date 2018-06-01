'use strict';

const Service = require('egg').Service;
class OrderService extends Service {
  async find(id) {
    const order = await this.ctx.model.Order.findById(id);

    if (order) {
      return order;
    }

    return Promise.reject(new Error('Invalid id'));
  }

  async findAll({ scheduledDate }) {
    const options = {};

    if (scheduledDate) {
      Object.assign(options, {
        where: {
          scheduled_date: scheduledDate
        }
      });
    }

    return this.ctx.model.Order.findAll(options);
  }

  async create({ scheduledDate, startTime, endTime, orderedBy }) {
    if (!scheduledDate || !startTime || !endTime || !orderedBy) {
      return Promise.reject(new Error('Missing arguments'));
    }

    return this.ctx.model.Order.create({
      scheduled_date: scheduledDate,
      start_time: startTime,
      end_time: endTime,
      ordered_by: orderedBy
    });
  }

  async delete(id) {
    const order = await this.find(id);

    return order.destroy();
  }
}

module.exports = OrderService;
